'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-limestone border-b border-cedar/20 sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & CMCC Branding */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cedar rounded-lg flex items-center justify-center">
              <span className="text-white font-craftsman text-lg">C</span>
            </div>
            <div>
              <div className="font-craftsman text-xl text-workshop-charcoal">
                Cypress Millwork
              </div>
              <div className="text-xs text-cedar font-workshop">
                European Cabinets • Spicewood, TX
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/portfolio" className="nav-link">
              Our Craftsmanship
            </Link>
            <Link href="/european-cabinets" className="nav-link">
              European Cabinets
            </Link>
            <Link href="/design-tool" className="nav-link">
              Design Your Kitchen
            </Link>
            <Link href="/about" className="nav-link">
              Meet Mike
            </Link>
            <Link href="/process" className="nav-link">
              Our Process
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            href="/progressive-form" 
            className="btn-primary hidden md:inline-flex items-center"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </nav>
  )
}