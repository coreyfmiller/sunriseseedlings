import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PlantCatalog } from "@/components/plant-catalog"
import { OurStory } from "@/components/our-story"
import { VisitUs } from "@/components/visit-us"
import { Footer } from "@/components/footer"

// ── Structured Data (JSON-LD) ────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sunriseseedlings.com/#business",
  name: "Sunrise Seedlings",
  alternateName: "Sunrise Seedlings Nursery",
  description:
    "Sunrise Seedlings is a kid-run backyard plant nursery in Quispamsis, NB. We grow heirloom tomatoes, fresh herbs, sweet peppers, jalapeños, mint, and giant sunflowers — available for pickup every weekend.",
  url: "https://sunriseseedlings.com",
  logo: "https://sunriseseedlings.com/icon.svg",
  image: "https://sunriseseedlings.com/images/kids-garden.jpg",
  telephone: "",
  priceRange: "$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Sunrise Drive",
    addressLocality: "Quispamsis",
    addressRegion: "NB",
    postalCode: "E2E",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4309,
    longitude: -65.9847,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=18+Sunrise+Drive+Quispamsis+NB",
  servesCuisine: null,
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash",
  sameAs: [],
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sunriseseedlings.com/#organization",
  name: "Sunrise Seedlings",
  url: "https://sunriseseedlings.com",
  logo: {
    "@type": "ImageObject",
    url: "https://sunriseseedlings.com/icon.svg",
    width: 512,
    height: 512,
  },
  description:
    "Kid-grown plants and seedlings in Quispamsis, NB. Heirloom tomatoes, herbs, peppers, sunflowers and more.",
  foundingDate: "2025",
  founders: [
    { "@type": "Person", name: "Kaelan" },
    { "@type": "Person", name: "Micah" },
    { "@type": "Person", name: "Madelyn" },
  ],
}

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sunrise Seedlings Plant Catalog",
  description: "Fresh seedlings grown by kids and available for pickup in Quispamsis NB",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Cherry Tomatoes – Sun Gold Heirloom",
        description: "Bursting-sweet golden cherry tomatoes grown by kids. Heirloom variety.",
        offers: { "@type": "Offer", price: "5.00", priceCurrency: "CAD", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Sweet Peppers – Rainbow Bell Mix",
        description: "Colorful sweet bell pepper seedlings in red, orange, and yellow.",
        offers: { "@type": "Offer", price: "5.00", priceCurrency: "CAD", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Fresh Basil – Genovese Classic",
        description: "Fragrant Italian basil seedlings perfect for pesto and cooking.",
        offers: { "@type": "Offer", price: "5.00", priceCurrency: "CAD", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Happy Sunflowers – Giant Mammoth",
        description: "Towering sunflowers that grow taller than you! Great for bees and butterflies.",
        offers: { "@type": "Offer", price: "5.00", priceCurrency: "CAD", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "Cool Mint – Spearmint Patch",
        description: "Fresh spearmint plants for lemonade, tea, and cooking.",
        offers: { "@type": "Offer", price: "5.00", priceCurrency: "CAD", availability: "https://schema.org/InStock" },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Product",
        name: "Spicy Jalapeños – Early Hot",
        description: "Kid-grown jalapeño seedlings. A little kick for your tacos and salsa!",
        offers: { "@type": "Offer", price: "5.00", priceCurrency: "CAD", availability: "https://schema.org/InStock" },
      },
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Sunrise Seedlings located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunrise Seedlings is located at 18 Sunrise Drive, Quispamsis, NB. We offer pickup only — no delivery at this time.",
      },
    },
    {
      "@type": "Question",
      name: "When can I pick up plants from Sunrise Seedlings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are open for pickup every Saturday and Sunday from 9:00 AM to 2:00 PM, or until we sell out!",
      },
    },
    {
      "@type": "Question",
      name: "Who runs Sunrise Seedlings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunrise Seedlings is run by three siblings — Kaelan (age 12), Micah (age 10), and Madelyn (age 8) — from their backyard in Quispamsis, NB.",
      },
    },
    {
      "@type": "Question",
      name: "What plants does Sunrise Seedlings sell?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We sell heirloom cherry tomatoes (Sun Gold), sweet bell peppers, fresh Genovese basil, Giant Mammoth sunflowers, spearmint, and jalapeños — all grown by kids for $5.00 each.",
      },
    },
    {
      "@type": "Question",
      name: "How much do the plants cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All plants are $5.00 CAD each. Cash accepted.",
      },
    },
    {
      "@type": "Question",
      name: "Does Sunrise Seedlings deliver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not yet! We are pickup-only from 18 Sunrise Drive, Quispamsis, NB on weekends.",
      },
    },
  ],
}

// ────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* Structured Data — injected into <head> via Next.js */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
    </>
  )
}
