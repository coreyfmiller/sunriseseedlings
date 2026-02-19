"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/hooks/use-cart"
import { ShoppingBasket, Check } from "lucide-react"
import { toast } from "sonner"

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
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(plant)
    toast.success(`${plant.name} added to basket! 🌱`, {
      duration: 2000,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
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
            onClick={handleAdd}
            className={`flex items-center gap-1.5 rounded-2xl px-4 py-2 text-sm font-bold shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 ${added
                ? "bg-garden-green text-white scale-105"
                : "bg-sun-yellow text-foreground"
              }`}
            aria-label={`Add ${plant.name} to basket`}
          >
            {added ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ShoppingBasket className="h-4 w-4" aria-hidden="true" />
            )}
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </article>
  )
}
