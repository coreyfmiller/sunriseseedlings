import { Sun, Sprout, Snowflake } from "lucide-react"
import Image from "next/image"

// ── Structured Data (JSON-LD) ────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GardenStore"],
  "@id": "https://sunriseseedlings.com/#business",
  name: "Sunrise Seedlings",
  description:
    "Sunrise Seedlings is a kid-run backyard plant nursery in Quispamsis, NB. Closed for the season — see you in spring 2027!",
  url: "https://sunriseseedlings.com",
  logo: "https://sunriseseedlings.com/icon.svg",
  image: "https://sunriseseedlings.com/images/SunriseSeedlings.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Sunrise Drive",
    addressLocality: "Quispamsis",
    addressRegion: "NB",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4309,
    longitude: -65.9847,
  },
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
    "Kid-grown plants and seedlings in Quispamsis, NB. Closed for the season — back in 2027!",
  foundingDate: "2025",
  founders: [
    { "@type": "Person", name: "Kaelan" },
    { "@type": "Person", name: "Micah" },
    { "@type": "Person", name: "Madelyn" },
  ],
}

// ────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="flex min-h-screen flex-col">
        {/* Simple header */}
        <header className="border-b-4 border-sun-yellow bg-warm-white/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4">
            <div className="flex items-center gap-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sun-yellow">
                <Sun className="h-6 w-6 text-foreground" aria-hidden="true" />
              </span>
              <span className="font-serif text-2xl tracking-tight text-garden-green md:text-3xl">
                Sunrise Seedlings
              </span>
            </div>
          </div>
        </header>

        {/* Main content — closed for season */}
        <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-warm-white px-4 py-16 text-center">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-garden.jpg"
              alt="The Sunrise Seedlings garden resting for winter"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
          </div>

          {/* Decorative floating elements */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-[10%] top-[20%] animate-float">
              <Snowflake className="h-8 w-8 text-sky-300 opacity-40 md:h-12 md:w-12" />
            </div>
            <div className="absolute right-[15%] top-[15%] animate-float" style={{ animationDelay: "1s" }}>
              <Snowflake className="h-6 w-6 text-sky-200 opacity-30 md:h-10 md:w-10" />
            </div>
            <div className="absolute bottom-[25%] left-[15%] animate-float" style={{ animationDelay: "2s" }}>
              <Sprout className="h-6 w-6 text-garden-green opacity-30 md:h-10 md:w-10" />
            </div>
            <div className="absolute bottom-[20%] right-[12%] animate-float" style={{ animationDelay: "0.5s" }}>
              <Sun className="h-8 w-8 text-sun-yellow opacity-25 md:h-10 md:w-10" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-100 px-5 py-2 text-sm font-bold text-foreground md:text-base">
              <Snowflake className="h-4 w-4 text-sky-400" aria-hidden="true" />
              Closed for the Season
              <Snowflake className="h-4 w-4 text-sky-400" aria-hidden="true" />
            </span>

            <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              Thanks for an
              <br />
              <span className="text-garden-green">Amazing Season!</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Our garden is tucked in for the winter. We had so much fun growing plants and meeting all of you this year. We&apos;re already dreaming about what to grow next!
            </p>

            <div className="mt-8 rounded-2xl border-2 border-sun-yellow/50 bg-background/80 px-6 py-5 backdrop-blur-sm">
              <p className="text-base font-bold text-foreground md:text-lg">
                <Sprout className="mr-2 inline h-5 w-5 text-garden-green" aria-hidden="true" />
                See you in Spring 2027!
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;ll be back with fresh seedlings, big sunflowers, and lots of dirt under our fingernails.
              </p>
            </div>

            <p className="mt-10 text-sm text-muted-foreground">
              — Kaelan, Micah &amp; Madelyn
            </p>
          </div>
        </main>

        {/* Simple footer */}
        <footer className="border-t-4 border-sun-yellow bg-garden-green text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sun-yellow">
                <Sun className="h-4 w-4 text-foreground" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg text-secondary-foreground">Sunrise Seedlings</span>
            </div>
            <p className="mt-2 text-sm text-secondary-foreground/70">
              18 Sunrise Drive · Quispamsis, NB
            </p>
            <p className="mt-3 text-xs text-secondary-foreground/50">
              &copy; {new Date().getFullYear()} Sunrise Seedlings · Built by{" "}
              <a
                href="https://www.fundylogic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 underline-offset-2 transition-colors hover:text-secondary-foreground hover:underline"
              >
                Fundy Logic
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
