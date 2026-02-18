import { Sun, MapPin, Clock, Sprout } from "lucide-react"

export function VisitUs() {
  return (
    <section id="visit" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-tomato-red/10 px-4 py-2 text-sm font-bold text-tomato-red">
            <Sun className="h-4 w-4" aria-hidden="true" />
            Come say hi!
          </span>
          <h2 className="font-serif text-4xl text-foreground md:text-5xl text-balance">
            Visit the Greenhouse
          </h2>
          <p className="mt-3 max-w-lg text-base text-muted-foreground md:text-lg">
            We love meeting fellow plant people! Stop by and grab your
            seedlings fresh from the garden.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Location card */}
          <div className="flex flex-col items-center gap-4 rounded-2xl border-3 border-garden-green bg-card p-8 text-center shadow-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-garden-green/10">
              <MapPin className="h-7 w-7 text-garden-green" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl text-foreground">
              Find Us
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              42 Sunflower Lane
              <br />
              Garden Heights, CA 95014
              <br />
              (The house with the big yellow mailbox!)
            </p>
          </div>

          {/* Hours card */}
          <div className="flex flex-col items-center gap-4 rounded-2xl border-3 border-sun-yellow bg-card p-8 text-center shadow-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sun-yellow/20">
              <Clock className="h-7 w-7 text-foreground" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl text-foreground">
              Open Hours
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Saturday & Sunday
              <br />
              9:00 AM - 2:00 PM
              <br />
              (Or until we sell out!)
            </p>
          </div>

          {/* Fun facts card */}
          <div className="flex flex-col items-center gap-4 rounded-2xl border-3 border-tomato-red bg-card p-8 text-center shadow-md sm:col-span-2 lg:col-span-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-tomato-red/10">
              <Sprout className="h-7 w-7 text-tomato-red" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl text-foreground">
              Good to Know
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Free gardening tips from kids!
              <br />
              Lemonade stand on hot days.
              <br />
              Dogs welcome (cats too).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
