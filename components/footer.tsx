import { Sun, Sprout } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t-4 border-sun-yellow bg-garden-green text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:gap-12">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sun-yellow">
              <Sun className="h-5 w-5 text-foreground" aria-hidden="true" />
            </span>
            <span className="font-serif text-xl text-secondary-foreground">Sunrise Seedlings</span>
          </div>
          <p className="flex items-center gap-2 text-sm text-secondary-foreground/80">
            <Sprout className="h-4 w-4" aria-hidden="true" />
            Planted with love, grown by kids.
          </p>
        </div>

        {/* Quick links — internal link structure for SEO */}
        <nav aria-label="Footer navigation" className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-secondary-foreground/50">
            Explore
          </p>
          {[
            { label: "Our Plants", href: "#catalog" },
            { label: "Our Story", href: "#story" },
            { label: "Visit Us", href: "#visit" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Location + hours */}
        <div className="flex flex-col items-center gap-2 text-center text-sm text-secondary-foreground/80 md:items-start md:text-left">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-secondary-foreground/50">
            Visit
          </p>
          <p>
            18 Sunrise Drive<br />
            Quispamsis, NB
          </p>
          <p>
            Sat &amp; Sun · 9 AM – 2 PM
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10 px-4 py-3">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center text-xs text-secondary-foreground/50 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Sunrise Seedlings. All rights reserved.
          </p>
          <p>
            Built by{" "}
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
      </div>
    </footer>
  )
}
