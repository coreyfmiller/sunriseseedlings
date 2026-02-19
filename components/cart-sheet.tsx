"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ShoppingBasket, Trash2, Plus, Minus, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useCart } from "@/hooks/use-cart"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CartSheet() {
    const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart()
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Reset loading state if user navigates back from Stripe
    useEffect(() => {
        const handlePageShow = (e: PageTransitionEvent) => {
            if (e.persisted || performance.getEntriesByType("navigation").some((n: any) => n.type === "back_forward")) {
                setIsCheckoutLoading(false)
                toast.dismiss()
            }
        }
        window.addEventListener("pageshow", handlePageShow)
        return () => window.removeEventListener("pageshow", handlePageShow)
    }, [])

    const handleCheckout = async () => {
        if (items.length === 0) return

        setIsCheckoutLoading(true)
        const toastId = toast.loading("Preparing checkout...")

        try {
            const response = await fetch("/api/create-checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ items }),
            })

            if (!response.ok) {
                let errorMessage = `Server error: ${response.status}`
                try {
                    const errorData = await response.json()
                    if (errorData.error) {
                        errorMessage = errorData.error
                    }
                } catch {
                    const text = await response.text()
                    console.error("Server error response:", text)
                }
                throw new Error(errorMessage)
            }

            const data = await response.json()

            if (data.error) {
                throw new Error(data.error)
            }

            if (data.url) {
                // Dismiss toast before navigating away so it doesn't persist on back navigation
                toast.dismiss(toastId)
                window.location.href = data.url
            } else {
                throw new Error("Something went wrong.")
            }
        } catch (error: any) {
            console.error("Checkout error:", error)
            toast.error(error.message || "Failed to start checkout", { id: toastId })
            setIsCheckoutLoading(false)
        }
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative h-10 w-10 border-2 border-garden-green rounded-xl">
                    <ShoppingBasket className="h-5 w-5 text-garden-green" />
                    {isMounted && getTotalItems() > 0 && (
                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-sun-yellow text-[10px] font-bold text-foreground ring-2 ring-background">
                            {getTotalItems()}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col sm:max-w-md">
                <SheetHeader className="px-1">
                    <SheetTitle className="font-serif text-2xl flex items-center gap-2">
                        <ShoppingBasket className="h-6 w-6 text-garden-green" />
                        Your Garden Basket
                    </SheetTitle>
                </SheetHeader>

                <Separator className="my-2" />

                {items.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
                        <div className="rounded-full bg-warm-white p-6">
                            <ShoppingBasket className="h-12 w-12 text-muted-foreground opacity-20" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-foreground">Your basket is empty</p>
                            <p className="text-sm text-muted-foreground mt-1">Add some seedlings to start your garden!</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <ScrollArea className="flex-1 -mx-1 px-1">
                            <div className="flex flex-col gap-4 py-4">
                                {items.map((item) => (
                                    <div key={item.name} className="flex gap-4">
                                        <div className="relative h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 border-muted/20">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between py-0.5">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-bold text-foreground text-sm leading-none">{item.name}</h4>
                                                    <p className="text-xs text-muted-foreground mt-1">{item.variety}</p>
                                                </div>
                                                <p className="font-bold text-garden-green text-sm">{item.price}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-1 rounded-lg border-2 border-muted/20 p-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 rounded-md hover:bg-muted"
                                                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 rounded-md hover:bg-muted"
                                                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-7 w-7 text-muted-foreground hover:text-tomato-red hover:bg-tomato-red/10"
                                                    onClick={() => removeItem(item.name)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        <div className="space-y-4 pt-4 border-t-2 border-dashed border-muted/40">
                            <div className="flex items-center justify-between text-lg">
                                <span className="font-bold text-foreground">Subtotal</span>
                                <span className="font-bold text-garden-green">${getTotalPrice().toFixed(2)}</span>
                            </div>
                            <p className="text-xs text-muted-foreground text-center">
                                CAD currency • Shipping to Canada only
                            </p>
                            <Button
                                className="w-full h-14 text-lg font-bold rounded-2xl bg-sun-yellow hover:bg-sun-yellow/90 text-foreground shadow-lg transition-all active:scale-95"
                                onClick={handleCheckout}
                                disabled={isCheckoutLoading}
                            >
                                {isCheckoutLoading ? (
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                ) : (
                                    <ShoppingBasket className="mr-2 h-5 w-5" />
                                )}
                                Checkout Now
                            </Button>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    )
}
