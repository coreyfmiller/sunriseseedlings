import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PlantCatalog } from "@/components/plant-catalog"
import { OurStory } from "@/components/our-story"
import { VisitUs } from "@/components/visit-us"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PlantCatalog />
        <OurStory />
        <VisitUs />
      </main>
      <Footer />
    </div>
  )
}
