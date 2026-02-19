import { Sprout, Sun } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-garden.jpg"
          alt=""
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Decorative floating elements */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[10%] top-[15%] animate-float">
          <Sun className="h-10 w-10 text-sun-yellow opacity-40 md:h-14 md:w-14" />
        </div>
        <div className="absolute right-[15%] top-[25%] animate-float" style={{ animationDelay: "1s" }}>
          <Sprout className="h-8 w-8 text-garden-green opacity-30 md:h-12 md:w-12" />
        </div>
        <div className="absolute bottom-[20%] left-[20%] animate-float" style={{ animationDelay: "2s" }}>
          <Sprout className="h-6 w-6 text-herb-green opacity-30 md:h-10 md:w-10" />
        </div>
        <div className="absolute bottom-[30%] right-[10%] animate-float" style={{ animationDelay: "0.5s" }}>
          <Sun className="h-8 w-8 text-sun-yellow opacity-25 md:h-10 md:w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center md:py-32 lg:py-40">
        {/* Fun badge */}
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-sun-yellow/30 px-5 py-2 text-sm font-bold text-foreground md:text-base">
          <Sprout className="h-4 w-4 text-garden-green" aria-hidden="true" />
          100% Grown by Kids Who Love Gardening
          <Sun className="h-4 w-4 text-sun-yellow" aria-hidden="true" />
        </span>

        <h1 className="font-serif text-5xl leading-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          From Our Garden
          <br />
          <span className="text-garden-green">to Yours!</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          We&apos;re a crew of young gardeners growing the tastiest tomatoes, the freshest herbs, and the happiest peppers in town.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#catalog"
            className="flex items-center gap-2 rounded-2xl bg-sun-yellow px-8 py-4 text-lg font-bold text-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <Sprout className="h-5 w-5" aria-hidden="true" />
            Browse the Greenhouse
          </a>
          <a
            href="#story"
            className="flex items-center gap-2 rounded-2xl border-3 border-garden-green bg-background px-8 py-4 text-lg font-bold text-garden-green transition-transform hover:scale-105 active:scale-95"
          >
            Our Story
          </a>
        </div>
      </div>
      {/* Wavy divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="relative block h-10 w-full md:h-16"
          aria-hidden="true"
        >
          <path
            d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
