'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import AIChatWidget from '../components/AIChatWidget'

// CMCC European Cabinet Homepage
export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main id="main-content" className="flex-1">
      <Navigation />

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
                  Where Old-World Mastery
                  <span className="block text-barn-red mt-2">
                    Meets Hill Country Soul
                  </span>
                </h1>
                
                <p className="mt-6 text-lg text-cedar leading-relaxed">
                  In our Spicewood workshop, <strong className="text-workshop-charcoal">six master craftsmen</strong> work alongside 
                  state-of-the-art CNC machinery that ensures millimeter-perfect precision. What you see here isn't just a team—it's a 
                  brotherhood of artisans who've dedicated their lives to perfecting frameless cabinetry. Every morning, they gather 
                  around these machines knowing that today's work will become tomorrow's family heirloom.
                </p>

                <div className="mt-6 p-4 bg-hill-sage/10 border-l-4 border-hill-sage rounded-r-lg">
                  <p className="craftsman-quote">
                    "Watch our team work and you'll see something special—six craftsmen who've turned 
                    precision into an art form. That's the difference between mass production and masterpiece."
                  </p>
                  <p className="text-sm text-cedar mt-2 font-workshop">
                    — Mike & The CMCC Workshop Team
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/design-tool"
                  className="btn-primary flex items-center justify-center group"
                >
                  Design Your Dream Kitchen
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
                  <div className="text-2xl font-craftsman text-barn-red">30+</div>
                  <div className="text-sm text-cedar">Years of Mastery</div>
                  <div className="text-xs text-cedar/70">learning, perfecting, creating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-craftsman text-barn-red">∞</div>
                  <div className="text-sm text-cedar">Stories Told</div>
                  <div className="text-xs text-cedar/70">in every handcrafted piece</div>
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
                <Image 
                  src="/images/Mike-Switzer-headshoot.jpg"
                  alt="The CMCC Workshop Family - Six craftsmen and next-generation apprentices around their precision CNC machinery in Spicewood, Texas"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                />
              </div>

              {/* Craftsman Signature Card */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-craftsman border border-cedar/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="signature text-lg">
                  "Precision machinery, master craftsmanship,
                  <br />one commitment to excellence"
                </p>
                <p className="text-xs text-cedar mt-1 font-workshop">
                  – The CMCC Workshop Team
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
              The Art Behind Every Door
            </h2>
            <p className="mt-4 text-lg text-cedar">
              Step into our Spicewood workshop and you'll hear the stories our craftsmen tell through wood—
              of precision learned through decades, of families gathering in kitchens that work beautifully.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "The Whisper-Quiet Moment",
                description: "When a drawer closes with barely a sound, you're feeling thirty years of perfecting the craft",
                icon: "🎵"
              },
              {
                title: "Built to Outlast Generations",
                description: "These aren't just cabinets—they're heirlooms waiting to hold your family's stories", 
                icon: "🏠"
              },
              {
                title: "Where Millimeters Matter",
                description: "In our workshop, we measure twice and cut once because perfection lives in the details",
                icon: "🔍"
              },
              {
                title: "Hill Country Heart",
                description: "Texas warmth meets old-world mastery in every piece that leaves our workshop",
                icon: "❤️"
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
              Where Stories Come to Life
            </h2>
            <p className="mt-4 text-lg text-cedar">
              Each kitchen begins as a conversation and becomes a legacy. Here are the stories 
              our craftsmen have helped families write, one precision-cut piece at a time.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                image: "/images/portfolio/280962352_979960499323253_3096391473720849804_n.webp",
                title: "Midnight on the Hill Country",
                location: "Austin, TX",
                description: "Modern ballad featuring frameless black cabinetry with Calacatta marble's natural rhythm"
              },
              {
                image: "/images/portfolio/283287162_378067917441562_7710920979229083174_n.webp",
                title: "Laundry Day Blues (But Make it Beautiful)", 
                location: "Dripping Springs, TX",
                description: "Honey-oak traditional warmth with European soft-close drawers and patterned tile backbeat"
              },
              {
                image: "/images/portfolio/285874445_972335230015127_3264095633632455465_n.webp",
                title: "Workshop Hymnal - Cabinet Frames in Progress",
                location: "Spicewood, TX", 
                description: "Raw cabinet frames standing like verses - European precision meets Hill Country soul"
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="european-cabinet-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-cabinet relative rounded-t-lg overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={`${project.title} - European frameless cabinets in ${project.location}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="european-badge">Handcrafted Legacy</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-craftsman text-lg text-workshop-charcoal mb-1">
                    {project.title}
                  </h3>
                  <p className="text-cedar text-sm">
                    {project.location} • {project.description}
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
              Your Story Starts in Our Workshop
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Come see where morning conversations become evening masterpieces. 
              Our craftsmen are ready to listen to your vision and help bring it to life.
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
                Precision Frameless Cabinet Specialists
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
              <h4 className="font-workshop font-semibold mb-4">Custom Cabinet Services</h4>
              <ul className="space-y-2 text-white/80">
                <li>Custom Kitchen Cabinets</li>
                <li>Bathroom Vanities</li>
                <li>Built-in Storage Solutions</li>
                <li>Premium Hardware Installation</li>
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
              © 2025 Cypress Millwork Custom Cabinets. Precision frameless cabinets handcrafted by CMCC in Spicewood, Texas.
            </p>
            <p className="signature text-white/40 text-sm mt-2">
              "Every cabinet tells a story of hill country craftsmanship"
            </p>
          </div>
        </div>
      </footer>
      
      {/* AI Chat Widget */}
      <AIChatWidget />
    </main>
  )
}