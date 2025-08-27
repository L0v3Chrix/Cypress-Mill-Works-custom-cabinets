'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

export default function EuropeanCabinetsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main id="main-content" className="flex-1">
      <Navigation />

      {/* European Cabinets Hero */}
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
                  European Frameless
                  <span className="block text-barn-red mt-2">
                    Cabinet Construction
                  </span>
                </h1>
                
                <p className="mt-6 text-lg text-cedar leading-relaxed max-w-3xl mx-auto">
                  Discover the precision, beauty, and functionality of authentic European 
                  frameless cabinet construction. Built with the time-tested 32mm system, 
                  these cabinets offer superior storage, clean lines, and lifetime durability.
                </p>

                <div className="mt-6 p-4 bg-hill-sage/10 border-l-4 border-hill-sage rounded-r-lg max-w-2xl mx-auto">
                  <p className="craftsman-quote">
                    "European frameless construction isn't just about more storage—it's about 
                    precision you can see and feel in every door, every drawer."
                  </p>
                  <p className="text-sm text-cedar mt-2 font-workshop">
                    — CMCC European Cabinet Specialists
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes European Cabinets Different */}
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
              The European Difference
            </h2>
            <p className="mt-4 text-lg text-cedar">
              Understanding what sets European frameless cabinets apart
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-craftsman text-3xl text-workshop-charcoal">
                Frameless vs. Face-Frame Construction
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-barn-red/10 border-l-4 border-barn-red rounded-r-lg">
                  <h4 className="font-craftsman text-lg text-workshop-charcoal mb-2">
                    European Frameless (Our Specialty)
                  </h4>
                  <ul className="space-y-1 text-cedar text-sm">
                    <li>• 15% more storage space</li>
                    <li>• Clean, modern lines with no visible frames</li>
                    <li>• Full access to cabinet interior</li>
                    <li>• Superior hardware integration</li>
                    <li>• Easier cleaning and maintenance</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-100 border-l-4 border-gray-400 rounded-r-lg">
                  <h4 className="font-craftsman text-lg text-workshop-charcoal mb-2">
                    Traditional Face-Frame
                  </h4>
                  <ul className="space-y-1 text-cedar text-sm">
                    <li>• Visible frame reduces opening size</li>
                    <li>• Limited drawer and door sizes</li>
                    <li>• Traditional American construction</li>
                    <li>• More affordable but less efficient</li>
                    <li>• Harder to clean corners and edges</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-cedar to-weathered-wood rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-craftsman mb-4">🏗️</div>
                  <div className="font-workshop">European Construction</div>
                  <div className="text-sm opacity-80">32mm System Precision</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 32mm System Explained */}
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
              The 32mm System
            </h2>
            <p className="mt-4 text-lg text-cedar">
              The foundation of European cabinet precision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Drilling",
                description: "Every hole drilled to exact 32mm spacing for perfect hardware alignment and adjustability.",
                icon: "⚡",
                details: [
                  "Millimeter-perfect hole placement",
                  "Universal European standard", 
                  "Allows infinite adjustability",
                  "Ensures perfect door alignment"
                ]
              },
              {
                title: "Modular Hardware",
                description: "European hinges, drawer slides, and accessories designed specifically for the 32mm system.",
                icon: "🔧",
                details: [
                  "Blum, Grass, and Hettich systems",
                  "Soft-close technology standard",
                  "Full-extension drawer slides",
                  "Concealed, adjustable hinges"
                ]
              },
              {
                title: "Perfect Integration",
                description: "All components work together seamlessly for superior function and longevity.",
                icon: "⚙️",
                details: [
                  "No visible hardware from outside",
                  "Easy adjustment and maintenance",
                  "Consistent operation across all doors",
                  "Professional, clean appearance"
                ]
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="workshop-card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-barn-red rounded-full text-white mb-4 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="font-craftsman text-xl text-workshop-charcoal">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-cedar mb-4 text-center">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <span className="text-barn-red mt-1 text-xs">•</span>
                      <span className="text-cedar text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* European Hardware */}
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
              Premium European Hardware
            </h2>
            <p className="mt-4 text-lg text-cedar">
              We exclusively use the finest European hardware manufacturers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                brand: "Blum",
                specialty: "Hinges & Drawer Systems",
                description: "Austrian precision engineering with lifetime warranties. Known for the smoothest soft-close operation.",
                features: ["BLUMOTION soft-close", "TANDEM drawer slides", "AVENTOS lift systems"]
              },
              {
                brand: "Grass",
                specialty: "Specialty Hardware",
                description: "German innovation in cabinet hardware, specializing in unique solutions and premium finishes.",
                features: ["Unique hinge solutions", "Premium drawer systems", "Specialty applications"]
              },
              {
                brand: "Hettich",
                specialty: "Complete Systems", 
                description: "German engineering excellence providing complete hardware ecosystems for European cabinets.",
                features: ["ArciTech drawer systems", "Sensys hinges", "AvanTech sliding systems"]
              }
            ].map((hardware, index) => (
              <motion.div 
                key={index}
                className="workshop-card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-craftsman text-2xl text-workshop-charcoal mb-2">
                  {hardware.brand}
                </h3>
                <div className="text-barn-red font-workshop font-medium mb-4">
                  {hardware.specialty}
                </div>
                <p className="text-cedar mb-6">
                  {hardware.description}
                </p>
                <ul className="space-y-2">
                  {hardware.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <span className="text-barn-red mt-1">•</span>
                      <span className="text-cedar text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose European Frameless?
            </h2>
            <p className="mt-4 text-lg text-cedar">
              The advantages go far beyond just storage space
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "15% More Storage",
                description: "No face frame means maximum interior space utilization",
                icon: "📦"
              },
              {
                title: "Easier Cleaning",
                description: "Smooth surfaces and full-access openings simplify maintenance", 
                icon: "✨"
              },
              {
                title: "Modern Aesthetics",
                description: "Clean lines and contemporary appeal for today's homes",
                icon: "🎨"
              },
              {
                title: "Superior Durability",
                description: "European construction methods ensure generations of use",
                icon: "💎"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-barn-red rounded-full text-white mb-4 text-2xl group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="font-craftsman text-xl text-workshop-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-cedar text-sm">
                  {benefit.description}
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
              Experience European Cabinet Excellence
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Ready to discover the difference authentic European construction makes?
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/design-tool"
                className="bg-white text-barn-red hover:bg-limestone font-workshop font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Design Your European Kitchen
              </Link>
              <Link 
                href="/progressive-form"
                className="border-2 border-white text-white hover:bg-white hover:text-barn-red font-workshop font-medium px-8 py-4 rounded-lg transition-all duration-200"
              >
                Schedule Consultation
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