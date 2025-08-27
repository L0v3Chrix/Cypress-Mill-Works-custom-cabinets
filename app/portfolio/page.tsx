'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

export default function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Mock portfolio data - would come from CMS or database
  const portfolioProjects = [
    {
      id: 1,
      title: "Modern Hill Country Kitchen",
      location: "Austin, TX",
      style: "European Frameless",
      material: "White Oak with Natural Finish",
      description: "A stunning European frameless kitchen featuring clean lines and maximum storage efficiency.",
      features: ["32mm European System", "Blum Soft-Close Hardware", "Full-Extension Drawers", "Hidden Hinges"],
      image: "placeholder-kitchen-1"
    },
    {
      id: 2,
      title: "Contemporary Lake House",
      location: "Lakeway, TX", 
      style: "European Frameless",
      material: "Walnut with Clear Coat",
      description: "Sophisticated European construction meets Texas lake house living with premium walnut cabinetry.",
      features: ["European Hardware", "Soft-Close Doors", "Custom Interior Organization", "Concealed LED Lighting"],
      image: "placeholder-kitchen-2"
    },
    {
      id: 3,
      title: "Traditional Hill Country",
      location: "Dripping Springs, TX",
      style: "European Frameless", 
      material: "Cherry with Hand-Rubbed Finish",
      description: "Classic European craftsmanship with rich cherry wood brings warmth to this hill country home.",
      features: ["Hand-Selected Cherry", "European Joinery", "Soft-Close Technology", "Custom Crown Molding"],
      image: "placeholder-kitchen-3"
    },
    {
      id: 4,
      title: "Modern Minimalist",
      location: "Bee Cave, TX",
      style: "European Frameless",
      material: "Painted MDF - Swiss White",
      description: "Clean, minimalist design showcasing the precision of European frameless construction.",
      features: ["Seamless Paint Finish", "Handle-less Design", "Push-to-Open Hardware", "Integrated Appliances"],
      image: "placeholder-kitchen-4"
    },
    {
      id: 5,
      title: "Rustic Contemporary",
      location: "Spicewood, TX",
      style: "European Frameless",
      material: "Reclaimed Texas Oak",
      description: "Local Texas oak meets European precision in this stunning rustic contemporary kitchen.",
      features: ["Reclaimed Local Wood", "European Construction", "Custom Distressing", "Brass Hardware Accents"],
      image: "placeholder-kitchen-5"
    },
    {
      id: 6,
      title: "Luxury Master Bath",
      location: "West Lake Hills, TX",
      style: "European Frameless",
      material: "Maple with Espresso Stain", 
      description: "European precision extends to this luxurious master bathroom vanity and storage system.",
      features: ["Water-Resistant Finishes", "Soft-Close Drawers", "Custom Sizing", "Integrated Lighting"],
      image: "placeholder-bathroom-1"
    }
  ]

  return (
    <main id="main-content" className="flex-1">
      <Navigation />

      {/* Portfolio Hero */}
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
                    Craftsmanship Portfolio
                  </span>
                </h1>
                
                <p className="mt-6 text-lg text-cedar leading-relaxed max-w-3xl mx-auto">
                  Every project showcases the precision and beauty of authentic European 
                  frameless construction. From Austin to the Hill Country, our cabinets 
                  transform homes with uncompromising quality and timeless design.
                </p>

                <div className="mt-6 p-4 bg-hill-sage/10 border-l-4 border-hill-sage rounded-r-lg max-w-2xl mx-auto">
                  <p className="craftsman-quote">
                    "Each project is a testament to European craftsmanship adapted 
                    for the unique character of Texas hill country homes."
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

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="european-cabinet-card group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Project Image Placeholder */}
                <div className="aspect-cabinet bg-gradient-to-br from-cedar to-weathered-wood rounded-t-lg flex items-center justify-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="text-center relative z-10">
                    <div className="text-4xl mb-2">🏠</div>
                    <div className="text-sm">European Cabinet Project</div>
                    <div className="text-xs opacity-80 mt-1">{project.location}</div>
                  </div>
                  
                  {/* European Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="european-badge">European Frameless</div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <h3 className="font-craftsman text-xl text-workshop-charcoal mb-2 group-hover:text-barn-red transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-cedar mb-3">
                    <span>📍 {project.location}</span>
                    <span>•</span>
                    <span>{project.material}</span>
                  </div>
                  
                  <p className="text-cedar text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <span className="text-barn-red mt-0.5">•</span>
                        <span className="text-cedar text-xs">{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 2 && (
                      <div className="text-xs text-cedar/70 mt-1">
                        +{project.features.length - 2} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="signature text-xs mt-4 pt-4 border-t border-limestone">
                    Crafted by CMCC • Spicewood Workshop
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Integration CTA */}
      <section className="py-20 bg-limestone/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-workshop-charcoal mb-4">
              Follow Our Latest Work
            </h2>
            <p className="text-lg text-cedar mb-8 max-w-2xl mx-auto">
              See our newest European cabinet projects and behind-the-scenes workshop content 
              on Instagram. Every post showcases authentic craftsmanship from our Spicewood workshop.
            </p>
            
            <div className="bg-white rounded-lg p-8 shadow-craftsman max-w-md mx-auto">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="font-craftsman text-xl text-workshop-charcoal mb-2">
                @cypressmillworkscc
              </h3>
              <p className="text-cedar text-sm mb-6">
                European frameless cabinets handcrafted in the Texas Hill Country
              </p>
              <a 
                href="https://instagram.com/cypressmillworkscc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process CTA */}
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
              Ready for Your European Cabinet Project?
            </h2>
            <p className="mt-4 text-lg text-cedar max-w-2xl mx-auto">
              From initial consultation to final installation, we guide you through 
              every step of creating your perfect European frameless cabinets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We start with understanding your vision and space requirements.",
                action: "Schedule Consultation",
                link: "/progressive-form"
              },
              {
                step: "2", 
                title: "Design",
                description: "Create detailed 3D designs with material samples and specifications.",
                action: "Try Design Tool",
                link: "/design-tool"
              },
              {
                step: "3",
                title: "Craftsmanship",
                description: "Master craftsmen build your cabinets in our Spicewood workshop.",
                action: "Learn Our Process",
                link: "/process"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-barn-red rounded-full text-white mb-4 text-2xl font-craftsman">
                  {step.step}
                </div>
                <h3 className="font-craftsman text-xl text-workshop-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-cedar text-sm mb-6">
                  {step.description}
                </p>
                <Link 
                  href={step.link}
                  className="btn-outline text-sm"
                >
                  {step.action}
                </Link>
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
              Start Your European Cabinet Project Today
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Join the growing number of Hill Country homeowners who chose 
              European frameless quality for their homes.
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
                Start Designing Now
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