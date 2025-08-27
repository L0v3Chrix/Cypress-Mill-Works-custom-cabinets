'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import CustomerJourney from '../../components/CustomerJourney'
import AIChatWidget from '../../components/AIChatWidget'

export default function DesignToolPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main id="main-content" className="flex-1">
      <Navigation />

      {/* Design Tool Hero */}
      <section className="workshop-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h1 className="text-workshop-charcoal leading-tight">
                  European Cabinet
                  <span className="block text-barn-red mt-2">
                    Design Tool
                  </span>
                </h1>
                
                <p className="mt-6 text-lg text-cedar leading-relaxed max-w-3xl mx-auto">
                  Explore European frameless cabinet options for your space. 
                  Our interactive design tool helps you visualize layouts, materials, 
                  and hardware before your consultation with our craftsmen.
                </p>

                <div className="mt-6 p-4 bg-hill-sage/10 border-l-4 border-hill-sage rounded-r-lg max-w-2xl mx-auto">
                  <p className="craftsman-quote">
                    "Great design starts with understanding your space and how you live in it. 
                    Let's explore the possibilities together."
                  </p>
                  <p className="text-sm text-cedar mt-2 font-workshop">
                    — CMCC Design Team
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revolutionary Customer Journey */}
      <CustomerJourney />

      {/* AI Chat Widget */}
      <AIChatWidget />

      {/* Footer */}
      <footer className="bg-workshop-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-craftsman text-xl mb-4">CMCC Workshop</h3>
              <p className="text-white/80 mb-2">European Frameless Cabinet Specialist</p>
              <p className="text-white/80 mb-2">📍 Spicewood, Texas 78669</p>
              <p className="text-white/80 mb-2">📞 (512) 555-0123</p>
              <p className="text-white/80">📧 mike@cypressmillwork.com</p>
            </div>
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