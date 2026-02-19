import { Sun, Sprout } from "lucide-react"
import Image from "next/image"

export function OurStory() {
  return (
    <section id="story" className="relative overflow-hidden">
      {/* Chalkboard background */}
      <div className="chalkboard-bg py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Section heading */}
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-sun-yellow/20 px-4 py-2 text-sm font-bold text-sun-yellow">
              <Sun className="h-4 w-4" aria-hidden="true" />
              How it all started
            </span>
            <h2 className="font-serif text-4xl text-chalkboard-text md:text-5xl text-balance">
              {"The 'Dirt' on Us"}
            </h2>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Story text - chalk feel */}
            <div className="order-2 flex flex-col gap-6 lg:order-1">
              <p className="text-lg leading-relaxed text-chalkboard-text/90 md:text-xl">
                It all started with one sunflower seed and a big dream. In the
                spring of 2025, siblings Kaelan (age 12), Micah (age 10), and
                Madelyn (age 8) decided to turn their backyard into a real plant
                nursery.
              </p>
              <p className="text-lg leading-relaxed text-chalkboard-text/80 md:text-xl">
                Armed with tiny shovels, a garden hose, and way too much
                enthusiasm, they planted their first batch of cherry tomatoes
                and that&apos;s when Sunrise Seedlings was born.
              </p>
              <p className="text-lg leading-relaxed text-chalkboard-text/80 md:text-xl">
                Now, they grow over 10 varieties of veggies, herbs, and flowers.
                Every plant gets a name, a daily pep-talk, and the best dirt
                money can buy.
              </p>

              {/* Fun stats */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[
                  { number: "400", label: "Plants Grown" },
                  { number: "3", label: "Kid Gardeners" },
                  { number: "1", label: "Big Dream" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center rounded-2xl border-2 border-dashed border-chalkboard-text/30 p-4 text-center"
                  >
                    <span className="font-serif text-3xl text-sun-yellow md:text-4xl">
                      {stat.number}
                    </span>
                    <span className="mt-1 text-xs font-bold text-chalkboard-text/60 md:text-sm">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border-4 border-dashed border-sun-yellow/40 shadow-2xl">
                <Image
                  src="/images/kids-garden.jpg"
                  alt="The Sunrise Seedlings garden with colorful pots and hand-painted signs"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
                {/* Decorative corner badge */}
                <div className="absolute -right-2 -top-2 flex h-16 w-16 items-center justify-center rounded-full bg-sun-yellow shadow-lg">
                  <Sprout className="h-7 w-7 text-garden-green" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
