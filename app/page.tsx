'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// CMCC European Cabinet Homepage
export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main id="main-content" className="flex-1">
      {/* Navigation - Hill Country Workshop */}
      <nav className="bg-limestone border-b border-cedar/20 sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & CMCC Branding */}
            <div className="flex items-center space-x-3">
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
            </div>

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

      {/* Hero Section - CMCC Story */}
      <section className="workshop-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h1 className="text-workshop-charcoal leading-tight">
                  European Frameless Cabinets
                  <span className="block text-barn-red mt-2">
                    Handcrafted in the Hill Country
                  </span>
                </h1>
                
                <p className="mt-6 text-lg text-cedar leading-relaxed">
                  Deep in the rolling hills of Spicewood, Texas, master craftsman 
                  <strong className="text-workshop-charcoal"> CMCC craftsmen</strong> blend 
                  old-world European techniques with modern precision. Every frameless cabinet 
                  tells a story of uncompromising quality and authentic Texas craftsmanship.
                </p>

                <div className="mt-6 p-4 bg-hill-sage/10 border-l-4 border-hill-sage rounded-r-lg">
                  <p className="craftsman-quote">
                    "European frameless construction isn't just about more storage—it's about 
                    precision you can see and feel in every door, every drawer."
                  </p>
                  <p className="text-sm text-cedar mt-2 font-workshop">
                    — CMCC European Cabinet Specialists
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/design-tool"
                  className="btn-primary flex items-center justify-center group"
                >
                  Design Your European Kitchen
                  <svg 
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link 
                  href="/portfolio"
                  className="btn-outline flex items-center justify-center"
                >
                  View Our Craftsmanship
                </Link>
              </div>

              {/* European Cabinet Features */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-cedar/20">
                <div className="text-center">
                  <div className="text-2xl font-craftsman text-barn-red">15%</div>
                  <div className="text-sm text-cedar">More Storage Space</div>
                  <div className="text-xs text-cedar/70">vs. face-frame cabinets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-craftsman text-barn-red">32mm</div>
                  <div className="text-sm text-cedar">European System</div>
                  <div className="text-xs text-cedar/70">precision construction</div>
                </div>
              </div>
            </motion.div>

            {/* CMCC Workshop Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-craftsman">
                {/* Placeholder for CMCC workshop photo */}
                <div className="w-full h-96 bg-gradient-to-br from-cedar to-weathered-wood flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-craftsman mb-4">🔨</div>
                    <div className="font-workshop">CMCC Workshop</div>
                    <div className="text-sm opacity-80">Spicewood, Texas</div>
                  </div>
                </div>
                {/* Future: Replace with actual photo */}
                {/* <Image 
                  src="/images/mike-switzer-workshop.jpg"
                  alt="CMCC craftsmen building European frameless cabinets in the Spicewood workshop"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                /> */}
              </div>

              {/* Craftsman Signature Card */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-craftsman border border-cedar/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="signature text-lg">
                  "Precision you can trust,
                  <br />craftsmanship you can feel"
                </p>
                <p className="text-xs text-cedar mt-1 font-workshop">
                  – CMCC European Cabinet Specialists
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* European Cabinet Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-workshop-charcoal">
              Why Choose European Frameless?
            </h2>
            <p className="mt-4 text-lg text-cedar">
              CMCC brings decades of European cabinetmaking traditions
              to every project in the Texas hill country.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Frameless Construction",
                description: "No face frame means 15% more storage space and cleaner lines",
                icon: "📐"
              },
              {
                title: "European Hardware",
                description: "Soft-close hinges and full-extension drawers for lifetime durability", 
                icon: "🔧"
              },
              {
                title: "Precision Engineering",
                description: "Millimeter-perfect tolerances ensure perfect alignment",
                icon: "⚙️"
              },
              {
                title: "Hill Country Quality",
                description: "Texas craftsmanship meets European construction standards",
                icon: "🏔️"
              }
            ].map((advantage, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-barn-red rounded-full text-white mb-4 text-2xl group-hover:scale-110 transition-transform">
                  {advantage.icon}
                </div>
                <h3 className="font-craftsman text-xl text-workshop-charcoal mb-2">
                  {advantage.title}
                </h3>
                <p className="text-cedar">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Portfolio Preview - @cypressmillworkscc */}
      <section className="py-20 bg-limestone/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-workshop-charcoal">
              European Frameless Excellence
            </h2>
            <p className="mt-4 text-lg text-cedar">
              Discover the precision and beauty of European cabinet construction,
              handcrafted for Texas hill country homes.
            </p>
          </motion.div>

          {/* Portfolio Grid Placeholder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="european-cabinet-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-cabinet bg-gradient-to-br from-cedar to-weathered-wood rounded-t-lg flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🏠</div>
                    <div className="text-sm">European Cabinet Project</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="european-badge mb-2">European Frameless</div>
                  <h3 className="font-craftsman text-lg text-workshop-charcoal mb-1">
                    Hill Country Kitchen
                  </h3>
                  <p className="text-cedar text-sm">
                    Austin, TX • White Oak with Natural Finish
                  </p>
                  <div className="mt-2 signature text-xs">
                    Crafted by CMCC
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/portfolio"
              className="btn-outline"
            >
              View Complete Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Consultation */}
      <section className="py-20 bg-barn-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white">
              Ready to Start Your European Cabinet Project?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Schedule a consultation with our craftsmen at the CMCC Spicewood workshop.
              Experience the difference of authentic European craftsmanship.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/progressive-form"
                className="bg-white text-barn-red hover:bg-limestone font-workshop font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Workshop Visit
              </Link>
              <Link 
                href="/design-tool"
                className="border-2 border-white text-white hover:bg-white hover:text-barn-red font-workshop font-medium px-8 py-4 rounded-lg transition-all duration-200"
              >
                Design Your Kitchen First
              </Link>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              📍 Spicewood Workshop • 📞 (512) 555-0123 • 📧 mike@cypressmillwork.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer - Hill Country Contact */}
      <footer className="bg-workshop-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* CMCC Workshop Info */}
            <div>
              <h3 className="font-craftsman text-xl mb-4">CMCC Workshop</h3>
              <p className="text-white/80 mb-2">
                European Frameless Cabinet Specialist
              </p>
              <p className="text-white/80 mb-2">
                📍 Spicewood, Texas 78669
              </p>
              <p className="text-white/80 mb-2">
                📞 (512) 555-0123
              </p>
              <p className="text-white/80">
                📧 mike@cypressmillwork.com
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-workshop font-semibold mb-4">European Cabinet Services</h4>
              <ul className="space-y-2 text-white/80">
                <li>Custom Kitchen Cabinets</li>
                <li>Bathroom Vanities</li>
                <li>Built-in Storage Solutions</li>
                <li>European Hardware Installation</li>
                <li>Workshop Tours & Consultations</li>
              </ul>
            </div>

            {/* Service Area */}
            <div>
              <h4 className="font-workshop font-semibold mb-4">Central Texas Service Area</h4>
              <ul className="space-y-2 text-white/80">
                <li>Austin & Greater Metro</li>
                <li>Spicewood & Lake Travis</li>
                <li>Lakeway & Bee Cave</li>
                <li>Dripping Springs</li>
                <li>Cedar Park & Round Rock</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2025 Cypress Millwork Custom Cabinets. European frameless cabinets handcrafted by CMCC in Spicewood, Texas.
            </p>
            <p className="signature text-white/40 text-sm mt-2">
              "Every cabinet tells a story of hill country craftsmanship"
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}