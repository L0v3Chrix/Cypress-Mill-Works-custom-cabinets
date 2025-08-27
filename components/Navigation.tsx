'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-cedar/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & CMCC Branding */}
          <Link href="/" className="flex items-center">
            <div>
              <div className="font-craftsman text-2xl text-workshop-charcoal tracking-tight">
                Cypress Millwork
              </div>
              <div className="text-sm text-cedar font-workshop tracking-wide">
                Custom Cabinets • Spicewood, TX
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/portfolio" className="nav-link text-sm font-workshop text-cedar hover:text-workshop-charcoal transition-colors duration-200">
              Our Craftsmanship
            </Link>
            <Link href="/european-cabinets" className="nav-link text-sm font-workshop text-cedar hover:text-workshop-charcoal transition-colors duration-200">
              Our Craft
            </Link>
            <Link href="/design-tool" className="nav-link text-sm font-workshop text-cedar hover:text-workshop-charcoal transition-colors duration-200">
              Design Your Kitchen
            </Link>
            <Link href="/about" className="nav-link text-sm font-workshop text-cedar hover:text-workshop-charcoal transition-colors duration-200">
              Meet Our Team
            </Link>
            <Link href="/process" className="nav-link text-sm font-workshop text-cedar hover:text-workshop-charcoal transition-colors duration-200">
              Our Process
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <Link 
            href="/design-tool" 
            className="hidden lg:inline-flex items-center bg-barn-red text-white px-6 py-2.5 rounded-lg font-workshop text-sm hover:bg-barn-red/90 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Schedule Consultation
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-cedar hover:text-workshop-charcoal hover:bg-limestone/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cedar"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close icon */}
            <svg
              className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-cedar/20">
            <Link
              href="/portfolio"
              className="block px-3 py-2 text-base font-workshop text-cedar hover:text-workshop-charcoal hover:bg-limestone/50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Craftsmanship
            </Link>
            <Link
              href="/european-cabinets"
              className="block px-3 py-2 text-base font-workshop text-cedar hover:text-workshop-charcoal hover:bg-limestone/50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              European Cabinets
            </Link>
            <Link
              href="/design-tool"
              className="block px-3 py-2 text-base font-workshop text-cedar hover:text-workshop-charcoal hover:bg-limestone/50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Design Your Kitchen
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-workshop text-cedar hover:text-workshop-charcoal hover:bg-limestone/50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Meet Our Team
            </Link>
            <Link
              href="/process"
              className="block px-3 py-2 text-base font-workshop text-cedar hover:text-workshop-charcoal hover:bg-limestone/50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Process
            </Link>
            <Link
              href="/design-tool"
              className="block mx-3 my-2 px-4 py-2 bg-barn-red text-white text-center font-workshop rounded-md hover:bg-barn-red/90 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}