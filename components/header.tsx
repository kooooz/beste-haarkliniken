"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const navigation = [
  { name: "Kliniken", href: "/kliniken" },
  { name: "Über", href: "/ueber" },
  { name: "FAQ", href: "/ratgeber" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center">
        {/* Logo on the left */}
        <div className="flex-1 flex items-start">
          <Link href="/" className="flex items-center text-black">
            <span className="text-black mr-2">●</span>
            <span className="text-base font-normal">beste-haarkliniken.de</span>
          </Link>
        </div>

        {/* Desktop Navigation centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-gray-600 transition-colors"
                style={{ fontSize: "12px", fontFamily: "var(--font-geist-sans)", fontWeight: 400 }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Email icon on the right */}
        <div className="flex-1 flex justify-end">
          <Link href="/kontakt" className="hidden md:flex">
            <Button
              className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 200,
                fontSize: "12px",
              }}
            >
              Kontakt
            </Button>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
              className="text-black"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-white/90 border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-black hover:text-gray-600 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "12px", fontFamily: "var(--font-geist-sans)", fontWeight: 400 }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="block py-2 text-black hover:text-gray-600 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: "12px", fontFamily: "var(--font-geist-sans)", fontWeight: 400 }}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
