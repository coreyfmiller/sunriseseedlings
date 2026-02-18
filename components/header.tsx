"use client"

import { Sun, Sprout, ShoppingBasket, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-warm-white/90 backdrop-blur-sm border-b-4 border-sun-yellow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-sun-yellow transition-transform group-hover:scale-110">
            <Sun className="h-6 w-6 text-foreground animate-bounce-gentle" aria-hidden="true" />
          </span>
          <span className="font-serif text-2xl tracking-tight text-garden-green md:text-3xl">
            Sunrise Seedlings
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {[
            { label: "Our Plants", href: "#catalog" },
            { label: "Our Story", href: "#story" },
            { label: "Visit Us", href: "#visit" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-bold text-foreground transition-colors hover:text-garden-green"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#catalog"
            className="flex items-center gap-2 rounded-2xl bg-garden-green px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <ShoppingBasket className="h-4 w-4" aria-hidden="true" />
            Shop Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-2xl bg-muted md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="flex flex-col gap-3 border-t border-border bg-warm-white px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {[
            { label: "Our Plants", href: "#catalog" },
            { label: "Our Story", href: "#story" },
            { label: "Visit Us", href: "#visit" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-bold text-foreground transition-colors hover:text-garden-green"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#catalog"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-garden-green px-5 py-3 text-base font-bold text-secondary-foreground shadow-md"
          >
            <ShoppingBasket className="h-5 w-5" aria-hidden="true" />
            Shop Now
          </a>
        </nav>
      )}
    </header>
  )
}
