'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

export default function ProcessPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main id="main-content" className="flex-1">
      <Navigation />

      {/* Process Hero Section */}
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
                  Our European Cabinet
                  <span className="block text-barn-red mt-2">
                    Construction Process
                  </span>
                </h1>
                
                <p className="mt-6 text-lg text-cedar leading-relaxed max-w-3xl mx-auto">
                  From initial consultation to final installation, every step of our process 
                  reflects decades of European craftsmanship tradition. We guide you through 
                  each phase with transparency, precision, and authentic Texas hospitality.
                </p>

                <div className="mt-6 p-4 bg-hill-sage/10 border-l-4 border-hill-sage rounded-r-lg max-w-2xl mx-auto">
                  <p className="craftsman-quote">
                    "Excellence isn't an accident—it's the result of a proven process 
                    refined over decades of European cabinet construction."
                  </p>
                  <p className="text-sm text-cedar mt-2 font-workshop">
                    — CMCC Master Craftsmen
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                duration: "1-2 hours",
                description: "We begin with an in-depth conversation about your vision, lifestyle, and specific needs. Our craftsmen listen carefully to understand how you use your space.",
                details: [
                  "Review your space and measurements",
                  "Discuss your design preferences and functionality needs",
                  "Explore European cabinet options and materials",
                  "Establish timeline and budget parameters",
                  "Schedule workshop visit (if desired)"
                ],
                icon: "💬"
              },
              {
                step: "02", 
                title: "Design & Planning",
                duration: "1-2 weeks",
                description: "Using European cabinet design principles, we create detailed plans that maximize both beauty and functionality in your space.",
                details: [
                  "Precise field measurements and site survey",
                  "3D design renderings with material samples",
                  "European hardware selection (Blum, Grass, Hettich)",
                  "Detailed construction drawings and specifications",
                  "Final quote with transparent pricing"
                ],
                icon: "📐"
              },
              {
                step: "03",
                title: "European Fabrication", 
                duration: "4-6 weeks",
                description: "In our Spicewood workshop, master craftsmen begin the authentic European cabinet construction process using the 32mm system.",
                details: [
                  "Premium material selection and preparation",
                  "Precision milling with European machinery",
                  "32mm system drilling for perfect alignment",
                  "Hand-fitted joints and premium finishes",
                  "European hardware integration and testing"
                ],
                icon: "🔨"
              },
              {
                step: "04",
                title: "Quality Inspection",
                duration: "2-3 days", 
                description: "Every cabinet undergoes rigorous quality inspection to ensure it meets our European construction standards before leaving the workshop.",
                details: [
                  "Dimensional accuracy verification",
                  "Door and drawer alignment check",
                  "Hardware function and soft-close testing", 
                  "Finish quality and color matching",
                  "Complete assembly dry-run and approval"
                ],
                icon: "🔍"
              },
              {
                step: "05",
                title: "Professional Installation",
                duration: "2-5 days",
                description: "Our experienced installation team ensures your European cabinets are perfectly positioned and fully functional from day one.",
                details: [
                  "Site preparation and protection",
                  "Precise cabinet positioning and leveling",
                  "European hardware final adjustment",
                  "Countertop template and coordination", 
                  "Complete system testing and client walkthrough"
                ],
                icon: "🏗️"
              },
              {
                step: "06",
                title: "Final Inspection & Care",
                duration: "Ongoing",
                description: "We stand behind our work with comprehensive support and maintenance guidance to ensure your investment lasts for generations.",
                details: [
                  "Complete functionality demonstration",
                  "Care and maintenance instruction",
                  "Warranty documentation and registration",
                  "Touch-up kit and cleaning supplies",
                  "Ongoing support and seasonal check-ins"
                ],
                icon: "✅"
              }
            ].map((processStep, index) => (
              <motion.div 
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-barn-red rounded-full flex items-center justify-center text-white text-2xl">
                        {processStep.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-barn-red font-craftsman text-lg mb-2">
                        Step {processStep.step}
                      </div>
                      <h3 className="font-craftsman text-2xl text-workshop-charcoal mb-2">
                        {processStep.title}
                      </h3>
                      <div className="text-cedar font-workshop mb-4 text-sm">
                        Duration: {processStep.duration}
                      </div>
                      <p className="text-cedar leading-relaxed mb-6">
                        {processStep.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="workshop-card p-6">
                    <h4 className="font-craftsman text-lg text-workshop-charcoal mb-4">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {processStep.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <span className="text-barn-red mt-1">•</span>
                          <span className="text-cedar text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
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
              Typical Project Timeline
            </h2>
            <p className="mt-4 text-lg text-cedar">
              European cabinet projects require time for proper craftsmanship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Planning Phase",
                timeframe: "2-3 weeks",
                description: "Consultation, design, and approval process",
                color: "bg-hill-sage"
              },
              {
                phase: "Construction Phase", 
                timeframe: "4-6 weeks",
                description: "European fabrication in our Spicewood workshop",
                color: "bg-barn-red"
              },
              {
                phase: "Installation Phase",
                timeframe: "1 week",
                description: "Professional installation and final inspection",
                color: "bg-cedar"
              }
            ].map((phase, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 ${phase.color} rounded-full text-white mb-4 text-2xl font-craftsman`}>
                  {index + 1}
                </div>
                <h3 className="font-craftsman text-xl text-workshop-charcoal mb-2">
                  {phase.phase}
                </h3>
                <div className="text-2xl font-craftsman text-barn-red mb-2">
                  {phase.timeframe}
                </div>
                <p className="text-cedar text-sm">
                  {phase.description}
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
              Ready to Begin Your European Cabinet Project?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Let's start with a consultation at our Spicewood workshop.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/progressive-form"
                className="bg-white text-barn-red hover:bg-limestone font-workshop font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/design-tool"
                className="border-2 border-white text-white hover:bg-white hover:text-barn-red font-workshop font-medium px-8 py-4 rounded-lg transition-all duration-200"
              >
                Start Design Process
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