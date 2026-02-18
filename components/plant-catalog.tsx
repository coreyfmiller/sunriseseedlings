import { Sprout } from "lucide-react"
import { PlantCard, type PlantData } from "./plant-card"

const plants: PlantData[] = [
  {
    name: "Cherry Tomatoes",
    variety: "Sun Gold Heirloom",
    price: "$4.50",
    image: "/images/tomatoes.jpg",
    borderColor: "red",
    badges: ["Kid-Grown", "Heirloom"],
    description:
      "Bursting-sweet golden cherries that taste like sunshine. Our best seller!",
  },
  {
    name: "Sweet Peppers",
    variety: "Rainbow Bell Mix",
    price: "$5.00",
    image: "/images/peppers.jpg",
    borderColor: "orange",
    badges: ["Kid-Grown", "Super Tasty"],
    description:
      "A colorful mix of sweet bell peppers in red, orange, and yellow. Crunchy and delicious!",
  },
  {
    name: "Fresh Basil",
    variety: "Genovese Classic",
    price: "$3.00",
    image: "/images/basil.jpg",
    borderColor: "green",
    badges: ["Kid-Grown", "Super Tasty"],
    description:
      "Fragrant Italian basil perfect for pesto, pizza, and pasta night. Smells amazing!",
  },
  {
    name: "Happy Sunflowers",
    variety: "Giant Mammoth",
    price: "$3.50",
    image: "/images/sunflowers.jpg",
    borderColor: "yellow",
    badges: ["Kid-Grown"],
    description:
      "Towering sunflowers that grow taller than you! Great for bees and butterflies.",
  },
  {
    name: "Cool Mint",
    variety: "Spearmint Patch",
    price: "$3.00",
    image: "/images/mint.jpg",
    borderColor: "green",
    badges: ["Kid-Grown", "Super Tasty"],
    description:
      "Fresh minty leaves for lemonade, tea, and making your breath smell great!",
  },
  {
    name: "Spicy Jalape\u00f1os",
    variety: "Early Hot",
    price: "$4.00",
    image: "/images/jalapenos.jpg",
    borderColor: "green",
    badges: ["Kid-Grown", "Heirloom"],
    description:
      "A little kick for your tacos and salsa! Grown with care (and gloves).",
  },
]

export function PlantCatalog() {
  return (
    <section id="catalog" className="bg-background pt-10 pb-16 md:pt-14 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-garden-green/10 px-4 py-2 text-sm font-bold text-garden-green">
            <Sprout className="h-4 w-4" aria-hidden="true" />
            Fresh from the dirt
          </span>
          <h2 className="font-serif text-4xl text-foreground md:text-5xl text-balance">
            The Plant Catalog
          </h2>
          <p className="mt-3 max-w-lg text-base text-muted-foreground md:text-lg">
            Every seedling is planted, watered, and loved by our team of young
            gardeners. Pick your favorites!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plants.map((plant) => (
            <PlantCard key={plant.name} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  )
}
