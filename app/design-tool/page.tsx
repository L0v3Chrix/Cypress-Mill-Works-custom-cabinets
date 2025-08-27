'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

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

      {/* Coming Soon Notice */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="workshop-card p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🛠️</div>
            <h2 className="font-craftsman text-3xl text-workshop-charcoal mb-6">
              3D Design Tool Coming Soon
            </h2>
            <p className="text-lg text-cedar mb-8 leading-relaxed">
              We're crafting an advanced European cabinet design tool that will let you:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Visualize frameless cabinets in 3D",
                "Try different European wood species",
                "Explore premium hardware options",
                "Calculate storage efficiency",
                "Generate preliminary pricing",
                "Save and share your designs"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <span className="text-barn-red">•</span>
                  <span className="text-cedar">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-cedar mb-8">
              Until our design tool launches, we invite you to schedule a consultation 
              where our craftsmen will create custom designs using professional CAD software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/progressive-form"
                className="btn-primary"
              >
                Schedule Design Consultation
              </Link>
              <Link 
                href="/portfolio"
                className="btn-outline"
              >
                View Design Examples
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Process Preview */}
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
              Our Current Design Process
            </h2>
            <p className="mt-4 text-lg text-cedar">
              How we create your perfect European cabinet design today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Consultation & Measurement",
                description: "We visit your space, take precise measurements, and understand your lifestyle and storage needs.",
                features: [
                  "Professional field measurements",
                  "Lifestyle and usage analysis",
                  "European system planning",
                  "Initial concept discussion"
                ],
                icon: "📐"
              },
              {
                step: "2",
                title: "3D Design & Materials",
                description: "Our designers create detailed 3D renderings with your choice of European materials and hardware.",
                features: [
                  "Professional CAD modeling",
                  "Material selection process", 
                  "European hardware options",
                  "Multiple design iterations"
                ],
                icon: "🎨"
              },
              {
                step: "3",
                title: "Review & Refinement",
                description: "We refine the design together until it perfectly matches your vision and functional requirements.",
                features: [
                  "Design review sessions",
                  "Modifications and adjustments",
                  "Final material confirmation",
                  "Detailed project specifications"
                ],
                icon: "✨"
              }
            ].map((step, index) => (
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
                    {step.icon}
                  </div>
                  <div className="text-barn-red font-craftsman text-lg mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="font-craftsman text-xl text-workshop-charcoal mb-3">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-cedar mb-4 text-center">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <span className="text-barn-red mt-1 text-xs">•</span>
                      <span className="text-cedar text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* European Cabinet Options Preview */}
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
              European Cabinet Options to Explore
            </h2>
            <p className="mt-4 text-lg text-cedar">
              Materials, styles, and hardware we'll discuss in your consultation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Wood Species */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-craftsman text-2xl text-workshop-charcoal">
                Premium Wood Species
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: "European Oak", description: "Quarter-sawn for stability and beautiful grain" },
                  { name: "American Walnut", description: "Rich chocolate tones with dramatic figure" },
                  { name: "Hard Maple", description: "Clean, consistent grain perfect for painted finishes" },
                  { name: "Cherry", description: "Classic warmth that deepens with age" },
                  { name: "Hickory", description: "Texas favorite with distinctive grain variation" }
                ].map((wood, index) => (
                  <div key={index} className="p-4 bg-limestone/50 rounded-lg">
                    <h4 className="font-craftsman text-lg text-workshop-charcoal">
                      {wood.name}
                    </h4>
                    <p className="text-cedar text-sm">{wood.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hardware Options */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-craftsman text-2xl text-workshop-charcoal">
                European Hardware Systems
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: "Blum AVENTOS", description: "Premium lift systems for upper cabinets" },
                  { name: "Blum TANDEM", description: "Full-extension drawer slides with soft-close" },
                  { name: "Grass Hinges", description: "Precision German hinges with lifetime warranty" },
                  { name: "Hettich ArciTech", description: "Modern drawer systems with push-to-open" },
                  { name: "Custom Handles", description: "Brass, stainless, or integrated options" }
                ].map((hardware, index) => (
                  <div key={index} className="p-4 bg-limestone/50 rounded-lg">
                    <h4 className="font-craftsman text-lg text-workshop-charcoal">
                      {hardware.name}
                    </h4>
                    <p className="text-cedar text-sm">{hardware.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Ready to Design Your European Cabinets?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              While our design tool is in development, our craftsmen are ready to 
              create custom designs that perfectly fit your space and vision.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/progressive-form"
                className="bg-white text-barn-red hover:bg-limestone font-workshop font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Design Session
              </Link>
              <Link 
                href="/european-cabinets"
                className="border-2 border-white text-white hover:bg-white hover:text-barn-red font-workshop font-medium px-8 py-4 rounded-lg transition-all duration-200"
              >
                Learn About European Construction
              </Link>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              📍 Spicewood Workshop • 📞 (512) 555-0123 • 📧 mike@cypressmillwork.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-limestone/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-workshop-charcoal">
              Design Process Questions?
            </h2>
            <p className="mt-4 text-lg text-cedar">
              Common questions about European cabinet design
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does the design process take?",
                answer: "Typically 1-2 weeks from initial consultation to final design approval, depending on project complexity and revision requests."
              },
              {
                question: "Do you charge for design services?",
                answer: "Initial consultation and basic design concepts are complimentary. Complex 3D renderings and multiple revisions may have design fees that are credited toward your project."
              },
              {
                question: "Can you work with my existing kitchen layout?",
                answer: "Absolutely! European frameless construction is very flexible. We can optimize your existing layout or suggest modifications to improve functionality."
              },
              {
                question: "What makes European cabinet design different?",
                answer: "European design focuses on maximum storage efficiency, clean lines, and precision hardware integration using the 32mm system standard."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="workshop-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-craftsman text-lg text-workshop-charcoal mb-3">
                  {faq.question}
                </h3>
                <p className="text-cedar">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
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