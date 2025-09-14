"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Track scroll position for header background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Products", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn("sticky top-0 z-50 h-16 transition-polene", isScrolled ? "header-scrolled" : "bg-transparent")}
    >
      <div className="flex items-center justify-between h-full gutter-desktop">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl sm:text-2xl text-foreground transition-polene hover:text-accent">
          Wooden Art
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-polene"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-foreground hover:text-accent transition-polene"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="gutter-mobile py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block font-sans text-base text-muted-foreground hover:text-foreground transition-polene"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
