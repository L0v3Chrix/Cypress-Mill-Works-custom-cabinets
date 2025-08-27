'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

export default function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Portfolio data with authentic images and descriptions - 29 projects
  const portfolioProjects = [
    {
      id: 1,
      title: "Midnight on the Hill Country",
      location: "Austin, TX",
      style: "European Frameless",
      material: "Black Frameless with Calacatta Marble",
      description: "Where sleek European design meets Texas sophistication - this modern ballad features frameless black cabinetry that plays counterpoint to Calacatta marble's natural rhythm.",
      features: ["Frameless Construction", "Waterfall Island", "Brass Hardware Accents", "Contemporary Fixtures"],
      image: "/images/portfolio/280962352_979960499323253_3096391473720849804_n.webp"
    },
    {
      id: 2,
      title: "Kitchen Architecture Ballad",
      location: "Austin, TX",
      style: "European Frameless",
      material: "Black Cabinets with Calacatta Marble",
      description: "European craftsmanship meets modern Austin living - where black frameless cabinetry creates dramatic verses against Calacatta marble's flowing chorus, and brass accents add the perfect bridge.",
      features: ["Frameless Construction", "Marble Waterfall", "Brass Fixtures", "Contemporary Design"],
      image: "/images/portfolio/280202222_1028041441164667_2713346285783465667_n.webp"
    },
    {
      id: 3,
      title: "Laundry Day Blues (But Make it Beautiful)",
      location: "Dripping Springs, TX", 
      style: "European Frameless",
      material: "Honey-Oak Traditional with Soft-Close",
      description: "Even the most humble chores deserve a beautiful backdrop - this honey-oak laundry room sings with traditional warmth, where European soft-close drawers keep the rhythm steady.",
      features: ["European Soft-Close", "Stacked Appliance Housing", "Custom Crown Molding", "Patterned Tile Harmony"],
      image: "/images/portfolio/283287162_378067917441562_7710920979229083174_n.webp"
    },
    {
      id: 4,
      title: "Workshop Hymnal - Where Stories Begin",
      location: "Spicewood, TX",
      style: "European Precision Construction", 
      material: "Raw Cabinet Frames in Progress",
      description: "Hand-cut joinery and authentic craftsmanship taking shape in the CMCC workshop, where each piece of Texas oak tells its own story before becoming part of your home's song.",
      features: ["Hand-Cut Joinery", "European System", "Texas Oak", "Workshop Craftsmanship"],
      image: "/images/portfolio/285874445_972335230015127_3264095633632455465_n.webp"
    },
    {
      id: 5,
      title: "Living Room Serenade",
      location: "Lakeway, TX",
      style: "Custom Built-In Entertainment",
      material: "Walnut Floating Shelves with Hidden Hardware",
      description: "Custom entertainment built-ins that harmonize with the home's natural flow - walnut floating shelves create visual melody against geometric wallpaper.",
      features: ["Floating Shelves", "Hidden European Hardware", "Custom Sizing", "Integrated Design"],
      image: "/images/portfolio/175556342_533160574735202_6868182073289303354_n.jpg"
    },
    {
      id: 6,
      title: "Kitchen Range Hood Poetry",
      location: "Dripping Springs, TX",
      style: "Custom Wood Feature Wall",
      material: "Hand-Selected Wood Slats with Floating Shelves",
      description: "A custom wood slat feature that turns the kitchen's heart into visual poetry - each slat hand-selected and positioned like lines in a favorite song.",
      features: ["Custom Wood Slats", "Floating Shelves", "Hand-Selected Materials", "Feature Wall Design"],
      image: "/images/portfolio/298892177_757382282166595_2197745396531062781_n.webp"
    },
    {
      id: 7,
      title: "Blue Ridge Kitchen Melody",
      location: "Bee Cave, TX",
      style: "European Frameless Galley",
      material: "Hill Country Blue with White Countertops", 
      description: "This galley kitchen sings in hill country blue - where European frameless construction meets the open sky through clerestory light, and every drawer slides with precision.",
      features: ["European Frameless", "Galley Design", "Skylight Integration", "Precision Hardware"],
      image: "/images/portfolio/241314839_4843568988988644_122180667307339521_n.jpg"
    },
    {
      id: 8,
      title: "Butler's Pantry Blues",
      location: "West Lake Hills, TX",
      style: "European Frameless with Geometric Details",
      material: "Deep Navy with Brass Hardware and Hexagonal Tile",
      description: "Deep navy cabinetry with geometric front details creates visual rhythm against marble hexagon flooring - where European soft-close meets bold design choices.",
      features: ["Geometric Cabinet Fronts", "Brass Hardware", "Hexagonal Tile", "European Soft-Close"],
      image: "/images/portfolio/244516683_1457025154684583_2882816464464954720_n.jpg"
    },
    {
      id: 9,
      title: "Cellar Sessions - Where Stories Age",
      location: "West Lake Hills, TX",
      style: "Custom Wine Storage",
      material: "Wooden Wine Racks with LED Lighting",
      description: "A custom wine cellar that holds more than bottles - it preserves memories and moments. Hand-crafted wooden storage creates intimate lighting for every treasured vintage.",
      features: ["Custom Wine Storage", "LED Strip Lighting", "Wood Construction", "Climate Considerations"],
      image: "/images/portfolio/257179135_143148238056302_2151405695465510090_n.jpg"
    },
    {
      id: 10,
      title: "Bathroom Linen Tower Harmony",
      location: "Dripping Springs, TX",
      style: "Traditional Built-In Storage",
      material: "Natural Wood with Glass Display and Brass Hardware",
      description: "A tall linen tower that stands like a verse in perfect harmony - combining open glass display shelving with closed storage, all finished in warm traditional tones.",
      features: ["Glass Display Shelving", "Closed Storage", "Brass Hardware", "Traditional Styling"],
      image: "/images/portfolio/244514705_217703800349729_7453643521303264460_n.jpg"
    },
    {
      id: 11,
      title: "Master Bath Double Vanity Duet",
      location: "Austin, TX",
      style: "Contemporary Floating Vanity",
      material: "Gray-Toned Wood with Decorative Tile and Brass Fixtures",
      description: "Two voices singing in perfect harmony - dual vessel sinks on a floating vanity where contemporary European hardware meets decorative tile that dances like musical notes.",
      features: ["Floating Vanity Design", "Dual Vessel Sinks", "Decorative Tile Backdrop", "Brass Fixtures"],
      image: "/images/portfolio/254440354_295022709155869_6204026709554730059_n.jpg"
    },
    {
      id: 12,
      title: "Master Bath Mirror Dance",
      location: "West Lake Hills, TX",
      style: "Luxury Traditional Bathroom",
      material: "Grey painted dual vanities with decorative glass doors",
      description: "Where morning routines become daily ceremonies - this master bathroom creates harmony between his-and-hers vanities, while decorative glass cabinet doors add visual interest like unexpected notes in a familiar melody.",
      features: ["Dual Vanities", "Decorative Glass Inserts", "Marble Surfaces", "Traditional Styling"],
      image: "/images/portfolio/175003049_4243026209065020_3892657423652843183_n.jpg"
    },
    {
      id: 13,
      title: "Forest Green Kitchen Anthem",
      location: "Austin, TX",
      style: "Bold Color Kitchen",
      material: "Forest green painted cabinetry with custom range hood",
      description: "Bold forest green cabinetry creates a dramatic verse against the space - where traditional craftsmanship meets contemporary color choices, and the custom range hood stands like a chorus that commands attention.",
      features: ["Bold Color Choice", "Custom Range Hood", "Traditional Construction", "Statement Finish"],
      image: "/images/portfolio/175889306_894299378018228_5918687859264344212_n.jpg"
    },
    {
      id: 14,
      title: "Media Console Hill Country Blues",
      location: "Austin, TX",
      style: "Built-In Media Console",
      material: "Natural wood grain with custom joinery",
      description: "This media console sings a quiet song of craftsmanship - where natural wood grain creates visual rhythm and European joinery ensures every door closes with the precision of a well-tuned instrument.",
      features: ["Traditional Joinery", "Natural Wood Finish", "Media Storage", "Custom Proportions"],
      image: "/images/portfolio/176009832_198867231825608_7122477450113504184_n.jpg"
    },
    {
      id: 15,
      title: "Farmhouse Fresh Kitchen Melody",
      location: "Dripping Springs, TX",
      style: "Farmhouse Traditional Kitchen",
      material: "White shaker cabinetry with marble surfaces and open shelving",
      description: "Clean farmhouse lines create an inviting melody where family gathers and stories unfold. White shaker doors provide the steady rhythm while floating shelves add an improvisational riff that keeps things interesting.",
      features: ["Shaker Door Style", "Floating Shelves", "Marble Backsplash", "Farmhouse Sink Integration"],
      image: "/images/portfolio/176324456_267377918375436_7982822801826118810_n.jpg"
    },
    {
      id: 16,
      title: "Bay Window Dreams Take Shape",
      location: "Spicewood, TX",
      style: "Workshop/Specialty Construction",
      material: "Custom curved window seat construction",
      description: "Where master craftsmanship meets architectural poetry - this curved bay window seat frame sings of patient hands and precise measurements, each arch telling the story of comfort yet to come.",
      features: ["Curved Construction", "Bay Window Integration", "Custom Woodworking", "Master Craftsmanship"],
      image: "/images/portfolio/202211118_328877062025640_7102343271574548618_n.jpg"
    },
    {
      id: 17,
      title: "Austin Modern Walnut Symphony",
      location: "Austin, TX",
      style: "Contemporary Kitchen",
      material: "Walnut veneer cabinetry with quartz countertops",
      description: "Rich walnut grain sings through this open-concept kitchen, where European engineering meets Hill Country warmth. Each cabinet door tells a story of sustainable craftsmanship, while the island anchors family gatherings like a well-loved chorus.",
      features: ["Full-height Walnut Veneer", "Large Island", "Open Shelving", "Integrated Appliances"],
      image: "/images/portfolio/207220116_336086201378527_9110129875892070646_n.jpg"
    },
    {
      id: 18,
      title: "Victorian Powder Room Revival",
      location: "Austin, TX",
      style: "Traditional Bold Bathroom",
      material: "Red painted cabinetry with ornate hardware and decorative wallpaper",
      description: "Bold red cabinetry creates a dramatic counterpoint to ornate wallpaper - where Victorian elegance meets contemporary craftsmanship in a powder room that sings with personality and refuses to whisper when it can harmonize.",
      features: ["Bold Color Choice", "Ornate Details", "Decorative Elements", "Vintage-inspired Design"],
      image: "/images/portfolio/244560669_998991134214592_1673447661410304556_n.jpg"
    },
    {
      id: 19,
      title: "Workshop Construction Symphony",
      location: "Spicewood, TX",
      style: "Workshop Construction Process",
      material: "Wood construction with precision clamping systems",
      description: "Where precision meets patience - orange woodworking clamps hold pieces in perfect alignment while adhesive cures. Each clamp positioned with the same care that defines every CMCC cabinet, ensuring joints that will last generations.",
      features: ["Precision Clamping Systems", "Professional Construction", "Quality Control", "Workshop Craftsmanship"],
      image: "/images/portfolio/254442879_596696218041456_6087512775437836428_n.jpg"
    },
    {
      id: 20,
      title: "Luxury Marble Vanity with Wood Slat Accent",
      location: "Austin, TX",
      style: "Contemporary Luxury Bathroom",
      material: "Calacatta marble with curved wood slat base",
      description: "Where European precision meets natural beauty - dramatic marble veining flows like a river while vertical wood slats create warmth below. The curved design softens angles, creating a spa-like retreat that sings with sophisticated elegance.",
      features: ["Curved Wood Slat Design", "Calacatta Marble", "Floating Vanity", "Contemporary Luxury"],
      image: "/images/portfolio/254610483_276709107797266_8152805412889345432_n.jpg"
    },
    {
      id: 21,
      title: "Luxury White Kitchen with Brass Harmony",
      location: "Austin, TX",
      style: "European Frameless Kitchen",
      material: "White frameless cabinetry with brass hardware and marble countertops",
      description: "Where culinary dreams meet Austrian precision - white frameless cabinets create clean verses while brass hardware adds golden accents throughout. The appliance garage and coffee station sing of thoughtful design that anticipates every morning ritual.",
      features: ["European Frameless Construction", "Brass Hardware", "Appliance Garage", "Integrated Coffee Station"],
      image: "/images/portfolio/255176085_4576678999081292_4787816572085264561_n.jpg"
    },
    {
      id: 22,
      title: "Navy Kitchen with Hexagonal Drama",
      location: "Austin, TX",
      style: "Contemporary Bold Kitchen",
      material: "Navy frameless cabinetry with hexagonal tile and wood accents",
      description: "Bold navy cabinetry creates striking contrast against the dramatic hexagonal tile backsplash that flows like geometric poetry. Natural wood floating shelves add warmth while the island anchors the space with contemporary confidence.",
      features: ["Navy Frameless Cabinets", "Hexagonal Tile Feature", "Wood Floating Shelves", "Contemporary Island"],
      image: "/images/portfolio/257450558_575129390262693_3622470329118153826_n.jpg"
    },
    {
      id: 23,
      title: "Modern Walnut Bathroom Elegance",
      location: "Austin, TX",
      style: "Contemporary Bathroom",
      material: "Walnut veneer floating vanity with quartz countertops",
      description: "Where natural beauty meets European precision - rich walnut grain creates warmth while clean lines maintain contemporary elegance. The floating design provides visual lightness, making this master bathroom feel like a daily spa retreat.",
      features: ["Walnut Veneer Construction", "Floating Vanity Design", "Dual Undermount Sinks", "Contemporary Hardware"],
      image: "/images/portfolio/257498776_125805266543632_8354965614861342769_n.jpg"
    },
    {
      id: 24,
      title: "Two-Tone Modern Kitchen Symphony",
      location: "Austin, TX",
      style: "Contemporary Modern Kitchen",
      material: "White upper cabinets with navy blue island and quartz countertops",
      description: "Where contrast creates harmony - crisp white upper cabinets provide brightness while the navy blue island anchors the space with contemporary confidence. European frameless construction ensures clean lines throughout this modern composition.",
      features: ["Two-Tone Design", "European Frameless", "Quartz Countertops", "Contemporary Pendants"],
      image: "/images/portfolio/257880561_416462976745349_1347656362255144599_n.jpg"
    },
    {
      id: 25,
      title: "Home Library & Office Built-In Symphony",
      location: "Austin, TX",
      style: "Custom Built-In Library Office",
      material: "White painted millwork with adjustable shelving and integrated desk",
      description: "Where knowledge meets craftsmanship - floor-to-ceiling built-ins create a library that celebrates both books and precision millwork. The integrated desk space provides the perfect spot for focused work while surrounded by inspiration.",
      features: ["Floor-to-ceiling Design", "Integrated Desk Space", "Adjustable Shelving", "Custom Millwork"],
      image: "/images/portfolio/258184582_753868032675641_4699146827868670583_n.jpg"
    },
    {
      id: 26,
      title: "Minimalist Bathroom Vanity Elegance",
      location: "Austin, TX",
      style: "Contemporary Minimalist Bathroom",
      material: "Light grey floating vanity with integrated sinks",
      description: "Where less becomes more - this minimalist floating vanity creates serene beauty through clean lines and thoughtful proportions. Integrated dual sinks and European soft-close drawers prove that simplicity and functionality sing in perfect harmony.",
      features: ["Floating Design", "Integrated Dual Sinks", "Minimalist Hardware", "Clean Contemporary Lines"],
      image: "/images/portfolio/76969124_1292066327668722_461405972132165851_n.jpg"
    },
    {
      id: 27,
      title: "Dining Room Built-In Display & Bar",
      location: "Austin, TX",
      style: "Contemporary Dining Room Built-Ins",
      material: "White upper display shelves with walnut base cabinetry and quartz counters",
      description: "Where entertaining meets artistry - floor-to-ceiling built-ins create both display and service in this sophisticated dining space. White open shelving showcases treasured pieces while walnut cabinetry below houses the essentials for memorable gatherings.",
      features: ["Floor-to-ceiling Design", "Mixed Material Construction", "Display Shelving", "Integrated Wet Bar"],
      image: "/images/portfolio/264150779_4520965057988845_7932617969982949820_n.jpg"
    },
    {
      id: 28,
      title: "White Kitchen Classic with Wire Mesh Harmony",
      location: "Lakeway, TX",
      style: "Traditional Kitchen",
      material: "White painted cabinetry with wire mesh inserts and marble countertops",
      description: "Traditional white cabinetry gets a modern verse with wire mesh cabinet doors - where classic meets contemporary in perfect harmony. European hardware provides the steady beat while marble countertops sing the chorus of timeless elegance.",
      features: ["Wire Mesh Inserts", "Traditional Crown Molding", "Marble Surfaces", "Brass Accents"],
      image: "/images/portfolio/72220114_1208345446002449_3098691272252224731_n.jpg"
    },
    {
      id: 29,
      title: "Minimalist Powder Room Verse",
      location: "West Lake Hills, TX",
      style: "Modern Minimal Bathroom",
      material: "Grey laminate floating vanity with quartz countertop",
      description: "Clean lines compose a quiet song in this powder room - where less becomes more through thoughtful proportion and European soft-close precision. Simple elegance that speaks volumes without saying a word.",
      features: ["Floating Vanity", "Clean Lines", "Integrated Storage", "Minimalist Hardware"],
      image: "/images/portfolio/73074123_500785520782554_8522055049338210226_n.jpg"
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
                viewport={{ once: true, margin: "-20%" }}
              >
                {/* Project Image */}
                <div className="aspect-cabinet relative rounded-t-lg overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={`${project.title} - European frameless cabinets in ${project.location}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  
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