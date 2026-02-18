import { Sun, Sprout } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t-4 border-sun-yellow bg-garden-green text-secondary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center md:flex-row md:justify-between md:text-left">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sun-yellow">
            <Sun className="h-5 w-5 text-foreground" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl text-secondary-foreground">Sunrise Seedlings</span>
        </div>

        {/* Tagline */}
        <p className="flex items-center gap-2 text-sm text-secondary-foreground/80">
          <Sprout className="h-4 w-4" aria-hidden="true" />
          Planted with love, grown by kids.
        </p>

        {/* Copyright */}
        <p className="text-xs text-secondary-foreground/60">
          &copy; {new Date().getFullYear()} Sunrise Seedlings. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
