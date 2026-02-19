"use client"

import Image from "next/image"
import { useState } from "react"
import { toast } from "sonner"
import { ShoppingBasket, Loader2 } from "lucide-react"

type BadgeType = "Kid-Grown" | "Heirloom" | "Super Tasty"

const badgeColors: Record<BadgeType, string> = {
  "Kid-Grown": "bg-garden-green text-white",
  "Heirloom": "bg-sun-yellow text-foreground",
  "Super Tasty": "bg-tomato-red text-white",
}

const borderColors: Record<string, string> = {
  red: "border-tomato-red",
  orange: "border-pepper-orange",
  green: "border-herb-green",
  yellow: "border-sun-yellow",
}

export interface PlantData {
  name: string
  variety: string
  price: string
  image: string
  borderColor: string
  badges: BadgeType[]
  description: string
}

export function PlantCard({ plant }: { plant: PlantData }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)
    const toastId = toast.loading(`Preparing to buy ${plant.name}...`)

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              name: plant.name,
              image: plant.image,
              quantity: 1,
            },
          ],
        }),
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error("Something went wrong. Please try again.")
      }
    } catch (error: any) {
      console.error("Checkout error:", error)
      toast.error(error.message || "Failed to start checkout", { id: toastId })
      setIsLoading(false)
    }
  }

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border-4 ${borderColors[plant.borderColor] ?? "border-border"
        } bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:animate-wiggle`}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={plant.image}
          alt={`${plant.name} - ${plant.variety}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-wrap gap-1.5">
          {plant.badges.map((badge) => (
            <span
              key={badge}
              className={`rounded-full px-3 py-1 text-xs font-bold shadow-sm ${badgeColors[badge]}`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div>
          <h3 className="font-serif text-xl text-foreground">{plant.name}</h3>
          <p className="text-sm font-semibold text-muted-foreground">
            {plant.variety}
          </p>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {plant.description}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-garden-green">
            {plant.price}
          </span>
          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="flex items-center gap-1.5 rounded-2xl bg-sun-yellow px-4 py-2 text-sm font-bold text-foreground shadow-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            aria-label={`Buy ${plant.name} now`}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <ShoppingBasket className="h-4 w-4" aria-hidden="true" />
            )}
            {isLoading ? "Wait..." : "Buy"}
          </button>
        </div>
      </div>
    </article>
  )
}
