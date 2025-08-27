'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main id="main-content" className="flex-1">
      <Navigation />

      {/* About Hero Section */}
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
                  Meet the CMCC Team
                  <span className="block text-barn-red mt-2">
                    European Cabinet Specialists
                  </span>
                </h1>
                
                <p className="mt-6 text-lg text-cedar leading-relaxed">
                  Deep in the heart of Spicewood, Texas, our team of master craftsmen 
                  brings decades of European cabinetmaking expertise to every project. 
                  We combine old-world techniques with modern precision to create 
                  frameless cabinets that exemplify authentic Texas hill country quality.
                </p>

                <div className="mt-6 p-4 bg-hill-sage/10 border-l-4 border-hill-sage rounded-r-lg">
                  <p className="craftsman-quote">
                    "Every cabinet we build carries the soul of European craftsmanship 
                    and the spirit of Texas hill country authenticity."
                  </p>
                  <p className="text-sm text-cedar mt-2 font-workshop">
                    — CMCC Master Craftsmen
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mike Switzer Photo */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-craftsman">
                <Image 
                  src="/images/Mike-Switzer-headshoot.jpg"
                  alt="Mike Switzer - Master craftsman and European cabinet specialist at CMCC"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
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
              Our Story
            </h2>
            <p className="mt-4 text-lg text-cedar">
              European precision meets Texas hill country authenticity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-craftsman text-2xl text-workshop-charcoal">
                European Cabinet Tradition
              </h3>
              <p className="text-cedar leading-relaxed">
                Our team trained in the authentic European cabinet-making tradition, 
                mastering the precise 32mm system that defines true frameless construction. 
                Every joint, every measurement, every finish reflects generations of 
                Old World craftsmanship.
              </p>
              <p className="text-cedar leading-relaxed">
                We believe that a cabinet is more than storage—it's a piece of functional 
                art that should serve your family for generations. That's why we use only 
                the finest materials and time-tested construction techniques.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-craftsman text-2xl text-workshop-charcoal">
                Hill Country Values
              </h3>
              <p className="text-cedar leading-relaxed">
                Located in the rolling hills of Spicewood, we bring Texas values to 
                European craftsmanship: honesty, quality, and genuine care for every 
                detail. When you work with CMCC, you're not just getting cabinets—you're 
                investing in a relationship built on trust and excellence.
              </p>
              <p className="text-cedar leading-relaxed">
                From initial consultation to final installation, we're committed to 
                exceeding your expectations with personalized service and uncompromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
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
              Our Expertise
            </h2>
            <p className="mt-4 text-lg text-cedar">
              Specialized knowledge built over decades of European cabinet construction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "32mm System Mastery",
                description: "Expert implementation of the European standard drilling system for perfect alignment and hardware integration.",
                icon: "⚙️"
              },
              {
                title: "Premium Hardware", 
                description: "Exclusive partnerships with Blum, Grass, and Hettich for authentic European soft-close mechanisms.",
                icon: "🔧"
              },
              {
                title: "Custom Millwork",
                description: "Hand-selected Texas woods combined with European veneers for unique, locally-inspired finishes.",
                icon: "🪵"
              }
            ].map((expertise, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-barn-red rounded-full text-white mb-4 text-2xl group-hover:scale-110 transition-transform">
                  {expertise.icon}
                </div>
                <h3 className="font-craftsman text-xl text-workshop-charcoal mb-2">
                  {expertise.title}
                </h3>
                <p className="text-cedar">
                  {expertise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-barn-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white">
              Ready to Experience European Craftsmanship?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Schedule a consultation with our craftsmen at the CMCC Spicewood workshop.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/progressive-form"
                className="bg-white text-barn-red hover:bg-limestone font-workshop font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Workshop Visit
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-barn-red font-workshop font-medium px-8 py-4 rounded-lg transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              📍 Spicewood Workshop • 📞 (512) 555-0123 • 📧 mike@cypressmillwork.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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