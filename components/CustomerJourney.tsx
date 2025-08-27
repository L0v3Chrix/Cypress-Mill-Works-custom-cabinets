'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface JourneyData {
  style?: string
  space?: string
  timeline?: string
  investmentRange?: string
  quizScore?: number
  selectedProjects?: string[]
  consultationType?: string
  selectedDate?: string
  contactInfo?: {
    name: string
    email: string
    phone: string
    address: string
    preferredContact: string
  }
}

const STYLE_OPTIONS = [
  {
    id: 'modern-minimalist',
    title: 'Modern Minimalist',
    subtitle: 'Clean lines, maximum function',
    image: '/images/portfolio/280962352_979960499323253_3096391473720849804_n.webp',
    icon: '🏙️',
    description: 'Sleek frameless design with integrated handles and sophisticated materials'
  },
  {
    id: 'hill-country-traditional',
    title: 'Hill Country Traditional',
    subtitle: 'Warmth meets craftsmanship',
    image: '/images/portfolio/283287162_378067917441562_7710920979229083174_n.webp',
    icon: '🏡',
    description: 'Timeless designs with authentic Texas charm and European precision'
  },
  {
    id: 'european-elegance',
    title: 'Timeless Elegance',
    subtitle: 'Sophisticated precision',
    image: '/images/portfolio/244516683_1457025154684583_2882816464464954720_n.jpg',
    icon: '✨',
    description: 'Luxury finishes with masterful joinery and premium hardware'
  },
  {
    id: 'custom-creation',
    title: 'Custom Creation',
    subtitle: 'Something uniquely yours',
    image: '/images/portfolio/175556342_533160574735202_6868182073289303354_n.jpg',
    icon: '🎨',
    description: 'Fully personalized design tailored to your vision and lifestyle'
  },
  {
    id: 'european-walnut',
    title: 'Heritage Walnut',
    subtitle: 'Rich warmth meets precision',
    image: '/images/portfolio/207220116_336086201378527_9110129875892070646_n.jpg',
    icon: '🌰',
    description: 'Rich walnut grain tells its own story—sustainable craftsmanship that anchors family gatherings for generations'
  },
  {
    id: 'white-farmhouse',
    title: 'White Farmhouse',
    subtitle: 'Classic comfort, modern function',
    image: '/images/portfolio/176324456_267377918375436_7982822801826118810_n.jpg',
    icon: '🏡',
    description: 'Clean farmhouse lines with white shaker doors and masterful precision—where family gathers and stories unfold'
  }
]

export default function CustomerJourney() {
  const [currentStep, setCurrentStep] = useState(1)
  const [journeyData, setJourneyData] = useState<JourneyData>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const updateJourneyData = (data: Partial<JourneyData>) => {
    setJourneyData(prev => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 8))
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const progress = currentStep / 8 * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-limestone via-white to-limestone/50">
      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-cedar/20 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-workshop text-cedar">Your Cabinet Discovery Journey</h2>
            <span className="text-sm font-workshop text-cedar">{currentStep} of 8</span>
          </div>
          <div className="w-full bg-limestone/50 rounded-full h-3 shadow-inner border border-limestone/30">
            <motion.div 
              className="bg-gradient-to-r from-barn-red via-barn-red/90 to-hill-sage h-3 rounded-full shadow-lg border border-barn-red/20"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <Stage1StyleDiscovery 
              key="stage1"
              onSelect={(style) => {
                updateJourneyData({ style })
                nextStep()
              }}
              onComplete={(style) => {
                updateJourneyData({ style })
                nextStep()
              }}
              selectedStyle={journeyData.style}
            />
          )}
          
          {currentStep === 2 && (
            <Stage2SpaceAssessment
              key="stage2"
              onSelect={(space) => {
                updateJourneyData({ space })
                nextStep()
              }}
              onBack={prevStep}
              selectedSpace={journeyData.space}
            />
          )}

          {currentStep === 3 && (
            <Stage3EuropeanEducation
              key="stage3"
              onComplete={(quizScore) => {
                updateJourneyData({ quizScore })
                nextStep()
              }}
              onBack={prevStep}
            />
          )}

          {currentStep === 4 && (
            <Stage4TimelineSelection
              key="stage4"
              onComplete={(timeline) => {
                updateJourneyData({ timeline })
                nextStep()
              }}
              onBack={prevStep}
              selectedTimeline={journeyData.timeline}
            />
          )}

          {currentStep === 5 && (
            <Stage5InvestmentSelection
              key="stage5"
              onComplete={(investmentRange) => {
                updateJourneyData({ investmentRange })
                nextStep()
              }}
              onBack={prevStep}
              selectedInvestment={journeyData.investmentRange}
            />
          )}

          {currentStep === 6 && (
            <Stage6DaySelection
              key="stage6"
              onComplete={(selectedDate) => {
                updateJourneyData({ selectedDate })
                nextStep()
              }}
              onBack={prevStep}
              selectedDate={journeyData.selectedDate}
            />
          )}

          {currentStep === 7 && (
            <Stage7TimeAndContactCollection
              key="stage7"
              onComplete={(contactInfo) => {
                updateJourneyData({ contactInfo })
                nextStep()
              }}
              onBack={prevStep}
              journeyData={journeyData}
            />
          )}

          {currentStep === 8 && (
            <Stage8ThankYou
              key="stage8"
              journeyData={journeyData}
              onRestart={() => {
                setCurrentStep(1)
                setJourneyData({})
              }}
            />
          )}

          {/* Additional stages will be implemented */}
          {currentStep > 8 && (
            <motion.div
              key="coming-soon"
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <div className="text-6xl mb-4">🚧</div>
              <h2 className="text-2xl font-craftsman text-workshop-charcoal mb-4">
                Building Your Experience
              </h2>
              <p className="text-cedar mb-8">
                Stage {currentStep} is being your crafted with care...
              </p>
              <button
                onClick={prevStep}
                className="btn-outline"
              >
                ← Back to Previous Step
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Stage 1: Visual Dream Discovery
function Stage1StyleDiscovery({ 
  onSelect,
  onComplete, 
  selectedStyle 
}: { 
  onSelect: (style: string) => void
  onComplete: (style: string) => void
  selectedStyle?: string 
}) {
  const [localSelectedStyle, setLocalSelectedStyle] = useState(selectedStyle || '')
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-12">
        <motion.h1 
          className="text-5xl md:text-6xl font-craftsman text-workshop-charcoal mb-4 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          What's Your Cabinet Dream?
        </motion.h1>
        <motion.p 
          className="text-xl text-cedar max-w-2xl mx-auto font-workshop leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Every great kitchen starts with a vision. Let's discover yours.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {STYLE_OPTIONS.map((style, index) => (
          <motion.div
            key={style.id}
            className={`group cursor-pointer bg-gradient-to-br from-white to-limestone/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-200 border border-limestone/20 ${
              localSelectedStyle === style.id ? 'ring-2 ring-barn-red shadow-barn-red/20' : ''
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setLocalSelectedStyle(style.id)
              onSelect(style.id)
            }}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={style.image}
                alt={style.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 text-2xl bg-white/95 backdrop-blur-md rounded-2xl w-14 h-14 flex items-center justify-center shadow-lg border border-white/50">
                {style.icon}
              </div>
              <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
                <h3 className="text-xl font-craftsman mb-1 tracking-tight">{style.title}</h3>
                <p className="text-white/95 text-sm font-workshop">{style.subtitle}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-cedar text-sm leading-relaxed">
                {style.description}
              </p>
              <div className="mt-4 flex items-center text-barn-red text-sm font-workshop">
                Choose This Style
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>


      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-sm text-cedar/70">
          Don't worry - we'll refine your choices as we learn more about your vision
        </p>
      </motion.div>
    </motion.div>
  )
}

// Stage 3: European Advantage Education (Simplified & Mobile-First)
function Stage3EuropeanEducation({ 
  onComplete, 
  onBack 
}: { 
  onComplete: (educationComplete: number) => void
  onBack: () => void
}) {
  const [selectedInterest, setSelectedInterest] = useState('')

  const interestOptions = [
    {
      id: 'storage',
      title: '15% More Storage Space',
      icon: '📦',
      description: 'Frameless construction eliminates center stiles, giving you significantly more storage in the same space.'
    },
    {
      id: 'quality',
      title: 'Superior Hardware',
      icon: '⚙️', 
      description: 'German-engineered soft-close hinges and slides that adjust in 6 directions and last for decades.'
    },
    {
      id: 'style',
      title: 'Clean Modern Look',
      icon: '✨',
      description: 'No visible hinges or face frames create seamless, contemporary lines that look sophisticated.'
    },
    {
      id: 'durability',
      title: '30+ Year Lifespan',
      icon: '🛡️',
      description: 'European construction methods and materials are built to last generations, not years.'
    }
  ]

  return (
    <motion.div
      className="text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-8">
        <motion.h1 
          className="text-3xl md:text-4xl font-craftsman text-workshop-charcoal mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          What Interests You About European Cabinets?
        </motion.h1>
        <motion.p 
          className="text-lg text-cedar max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Choose what you'd like to learn more about - this helps us personalize your consultation.
        </motion.p>
      </div>

      {/* Mobile-First Interest Selection */}
      <div className="max-w-lg mx-auto space-y-4 mb-12">
        {interestOptions.map((option, index) => (
          <motion.button
            key={option.id}
            onClick={() => {
              setSelectedInterest(option.id)
              onComplete(1) // Auto-advance on selection
            }}
            className={`w-full p-6 text-left rounded-xl border-2 transition-all duration-200 ${
              selectedInterest === option.id 
                ? 'border-barn-red bg-gradient-to-br from-barn-red/5 to-barn-red/10 shadow-lg' 
                : 'border-limestone bg-gradient-to-br from-white to-limestone/20 hover:border-cedar/30 hover:shadow-lg hover:from-white hover:to-cedar/5'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl flex-shrink-0">{option.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-craftsman text-workshop-charcoal mb-2">
                  {option.title}
                </h3>
                <p className="text-cedar text-sm">
                  {option.description}
                </p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${
                selectedInterest === option.id 
                  ? 'border-barn-red bg-barn-red' 
                  : 'border-limestone'
              }`}>
                {selectedInterest === option.id && (
                  <svg className="w-4 h-4 text-white mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>


      <div className="flex justify-center max-w-md mx-auto">
        <button
          onClick={onBack}
          className="btn-outline flex items-center"
        >
          <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>
    </motion.div>
  )
}

// Stage 4: Timeline and Investment Range Selector
// Stage 4: Timeline Selection (Separated)
function Stage4TimelineSelection({ 
  onComplete,
  onBack, 
  selectedTimeline
}: { 
  onComplete: (timeline: string) => void
  onBack: () => void
  selectedTimeline?: string
}) {
  const [otherTimelineText, setOtherTimelineText] = useState('')

  const timelineOptions = [
    {
      id: 'immediate',
      title: 'Ready Now',
      subtitle: '1-3 months',
      icon: '🚀',
      description: 'Project approved, ready to start design and manufacturing',
      popular: false
    },
    {
      id: 'planning',
      title: 'Planning Phase',
      subtitle: '3-6 months',
      icon: '📋',
      description: 'Still planning details, timing, and preparing for the project',
      popular: true
    },
    {
      id: 'future',
      title: 'Future Project',
      subtitle: '6-12 months',
      icon: '🏗️',
      description: 'Planning for next year, gathering ideas and information',
      popular: false
    },
    {
      id: 'exploring',
      title: 'Just Exploring',
      subtitle: '1+ years out',
      icon: '🔍',
      description: 'Early research phase, learning about options and possibilities',
      popular: false
    },
    {
      id: 'other-timeline',
      title: 'Other Timeline',
      subtitle: 'Tell us your situation',
      icon: '💭',
      description: 'Describe your specific timeline or circumstances',
      popular: false
    }
  ]

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-craftsman text-workshop-charcoal mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          What's Your Timeline?
        </motion.h1>
        <motion.p 
          className="text-lg text-cedar max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Understanding your project timeline helps us provide the most relevant consultation approach
        </motion.p>
      </div>

      {/* Timeline Selection */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {timelineOptions.map((timeline, index) => (
            <motion.div
              key={timeline.id}
              className={`relative cursor-pointer rounded-lg p-6 border-2 transition-all duration-200 shadow-md ${
                selectedTimeline === timeline.id 
                  ? 'border-barn-red bg-gradient-to-br from-barn-red/5 to-barn-red/10 shadow-xl' 
                  : 'border-limestone bg-gradient-to-br from-white to-limestone/10 hover:border-cedar/30 hover:shadow-lg hover:from-white hover:to-cedar/5'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -2 }}
              onClick={() => onComplete(timeline.id)}
            >
              {timeline.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-hill-sage text-white text-xs font-workshop px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-3xl mb-3">{timeline.icon}</div>
              <h3 className="text-lg font-craftsman text-workshop-charcoal mb-1">
                {timeline.title}
              </h3>
              <p className="text-barn-red text-sm font-workshop mb-2">
                {timeline.subtitle}
              </p>
              <p className="text-cedar text-sm">
                {timeline.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center max-w-md mx-auto">
        <button
          onClick={onBack}
          className="btn-outline flex items-center"
        >
          <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>
    </motion.div>
  )
}

// Stage 5: Investment Selection (Separated from Timeline)
function Stage5InvestmentSelection({ 
  onComplete,
  onBack, 
  selectedInvestment
}: { 
  onComplete: (investmentRange: string) => void
  onBack: () => void
  selectedInvestment?: string
}) {
  const [otherInvestmentText, setOtherInvestmentText] = useState('')

  const investmentOptions = [
    {
      id: 'kitchen-refresh',
      title: '$15k - $35k',
      subtitle: 'Cabinet Refresh',
      description: 'Replace cabinets, keep current layout and appliances',
      icon: '✨',
      features: ['New cabinet boxes & doors', 'European hardware upgrade', 'Soft-close mechanisms', 'Keep existing countertops']
    },
    {
      id: 'kitchen-remodel',
      title: '$35k - $65k',
      subtitle: 'Kitchen Transformation',
      description: 'Complete kitchen remodel with layout changes',
      icon: '🏠',
      features: ['Full cabinet system', 'Layout optimization', 'New countertops', 'Enhanced storage solutions'],
      popular: true
    },
    {
      id: 'luxury-kitchen',
      title: '$65k - $100k+',
      subtitle: 'Luxury European Kitchen',
      description: 'Premium materials, custom features, and architectural details',
      icon: '👑',
      features: ['Premium European hardware', 'Custom millwork details', 'Specialty storage solutions', 'Luxury finishes & materials']
    },
    {
      id: 'bathroom-project',
      title: '$8k - $25k',
      subtitle: 'Bathroom Cabinets',
      description: 'Custom vanities and bathroom storage solutions',
      icon: '🛁',
      features: ['Custom vanity design', 'Optimal storage solutions', 'Water-resistant finishes', 'European hinges & slides']
    },
    {
      id: 'other-investment',
      title: 'Other Budget',
      subtitle: 'Tell us your range',
      description: 'Describe your budget or specific needs',
      icon: '💭',
      features: ['Custom quote based on your needs', 'Flexible payment options', 'Value-engineered solutions', 'No-pressure consultation']
    }
  ]

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-craftsman text-workshop-charcoal mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Investment Range
        </motion.h1>
        <motion.p 
          className="text-lg text-cedar max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Help us provide accurate recommendations by sharing your budget range
        </motion.p>
      </div>

      {/* Investment Selection */}
      <div className="mb-12">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {investmentOptions.map((investment, index) => (
            <motion.div
              key={investment.id}
              className={`relative cursor-pointer rounded-lg p-6 border-2 transition-all duration-200 shadow-md ${
                selectedInvestment === investment.id 
                  ? 'border-barn-red bg-gradient-to-br from-barn-red/5 to-barn-red/10 shadow-xl' 
                  : 'border-limestone bg-gradient-to-br from-white to-limestone/10 hover:border-cedar/30 hover:shadow-lg hover:from-white hover:to-cedar/5'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ y: -2 }}
              onClick={() => onComplete(investment.id)}
            >
              {investment.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-barn-red text-white text-xs font-workshop px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-2xl mb-2">{investment.icon}</div>
                  <h3 className="text-xl font-craftsman text-workshop-charcoal mb-1">
                    {investment.title}
                  </h3>
                  <p className="text-barn-red font-workshop mb-2">
                    {investment.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-cedar text-sm mb-4">
                {investment.description}
              </p>
              <ul className="text-cedar text-sm space-y-1">
                {investment.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-4 h-4 text-hill-sage mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* "Other Investment" Text Field */}
      {selectedInvestment === 'other-investment' && (
        <motion.div
          className="max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <textarea
            placeholder="Tell us about your budget range or specific needs..."
            value={otherInvestmentText}
            onChange={(e) => setOtherInvestmentText(e.target.value)}
            className="w-full p-4 border border-limestone rounded-lg focus:ring-2 focus:ring-barn-red focus:border-transparent resize-none"
            rows={3}
          />
        </motion.div>
      )}

      {/* Value Messaging */}
      <motion.div
        className="bg-gradient-to-r from-hill-sage/10 to-cedar/10 rounded-xl p-6 max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="text-2xl mb-4">💡</div>
        <h3 className="text-xl font-craftsman text-workshop-charcoal mb-3">
          Why European Cabinets Are Worth The Investment
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-cedar">
          <div>
            <strong className="text-workshop-charcoal">Last 30+ Years:</strong> Superior materials and construction mean decades of reliable service
          </div>
          <div>
            <strong className="text-workshop-charcoal">Add Home Value:</strong> European cabinets significantly increase your home's resale value
          </div>
          <div>
            <strong className="text-workshop-charcoal">No Hidden Costs:</strong> All hardware, soft-close, and features included - no add-ons or extras
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center max-w-md mx-auto">
        <button
          onClick={onBack}
          className="btn-outline flex items-center"
        >
          <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>
    </motion.div>
  )
}

// Stage 6: Day Selection (Progressive Appointment)
function Stage6DaySelection({ 
  onComplete,
  onBack, 
  selectedDate
}: { 
  onComplete: (selectedDate: string) => void
  onBack: () => void
  selectedDate?: string
}) {
  const [localSelectedDate, setLocalSelectedDate] = useState(selectedDate || '')

  // Generate next 30 days for selection
  const generateDays = () => {
    const days = []
    const today = new Date()
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })
      const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      const fullDate = date.toISOString().split('T')[0]
      
      days.push({
        id: fullDate,
        dayName,
        monthDay,
        date: date
      })
    }
    
    return days
  }

  const days = generateDays()

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-craftsman text-workshop-charcoal mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          When Would You Like to Meet?
        </motion.h1>
        <motion.p 
          className="text-lg text-cedar max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Choose your preferred day for the consultation. We'll show available times next.
        </motion.p>
      </div>

      {/* Day Selection Grid */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {days.slice(0, 16).map((day, index) => (
            <motion.button
              key={day.id}
              onClick={() => onComplete(day.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left shadow-sm ${
                localSelectedDate === day.id 
                  ? 'border-barn-red bg-gradient-to-br from-barn-red/5 to-barn-red/10 shadow-lg' 
                  : 'border-limestone bg-gradient-to-br from-white to-limestone/10 hover:border-cedar/30 hover:shadow-md hover:from-white hover:to-cedar/5'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.03 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-workshop text-sm text-cedar">
                {day.dayName}
              </div>
              <div className="font-craftsman text-workshop-charcoal">
                {day.monthDay}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="flex justify-center max-w-md mx-auto">
        <button
          onClick={onBack}
          className="btn-outline flex items-center"
        >
          <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>
    </motion.div>
  )
}

// Stage 7: Time Selection & Contact Collection (Final)
function Stage7TimeAndContactCollection({ 
  onComplete, 
  onBack, 
  journeyData 
}: { 
  onComplete: (contactInfo: any) => void
  onBack: () => void
  journeyData: JourneyData
}) {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredContact: 'phone',
    consultationType: 'in-home' // Default to in-home since it's most popular
  })
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setContactInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Generate available time slots based on selected date
  const getAvailableTimeSlots = () => {
    if (!journeyData.selectedDate) return []
    
    const selectedDateObj = new Date(journeyData.selectedDate)
    const dayOfWeek = selectedDateObj.getDay() // 0 = Sunday, 1 = Monday, etc.
    
    const morningSlots = [
      { id: '9:00 AM', label: '9:00 AM', period: 'Morning' },
      { id: '10:00 AM', label: '10:00 AM', period: 'Morning' },
      { id: '11:00 AM', label: '11:00 AM', period: 'Morning' }
    ]
    
    const afternoonSlots = [
      { id: '1:00 PM', label: '1:00 PM', period: 'Afternoon' },
      { id: '2:00 PM', label: '2:00 PM', period: 'Afternoon' },
      { id: '3:00 PM', label: '3:00 PM', period: 'Afternoon' }
    ]
    
    const eveningSlots = [
      { id: '5:00 PM', label: '5:00 PM', period: 'Evening' },
      { id: '6:00 PM', label: '6:00 PM', period: 'Evening' },
      { id: '7:00 PM', label: '7:00 PM', period: 'Evening' }
    ]
    
    // Morning and afternoon available all days
    let availableSlots = [...morningSlots, ...afternoonSlots]
    
    // Evening only available Tuesday (2), Thursday (4), Friday (5)
    if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 5) {
      availableSlots.push(...eveningSlots)
    }
    
    return availableSlots
  }

  const availableTimeSlots = getAvailableTimeSlots()
  const canSubmit = contactInfo.name && contactInfo.email && contactInfo.phone && contactInfo.address && selectedTime

  const handleSubmit = async () => {
    if (!canSubmit) return
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      onComplete({ ...contactInfo, selectedTime, selectedDate: journeyData.selectedDate })
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-craftsman text-workshop-charcoal mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Choose Your Time
        </motion.h1>
        <motion.p 
          className="text-lg text-cedar max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Select your preferred time for {journeyData.selectedDate ? new Date(journeyData.selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : 'your consultation'}
        </motion.p>
      </div>

      {/* Progressive Time Selection */}
      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {availableTimeSlots.map((slot, index) => (
            <motion.button
              key={slot.id}
              onClick={() => setSelectedTime(slot.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left shadow-sm ${
                selectedTime === slot.id 
                  ? 'border-barn-red bg-gradient-to-br from-barn-red/5 to-barn-red/10 shadow-lg' 
                  : 'border-limestone bg-gradient-to-br from-white to-limestone/10 hover:border-cedar/30 hover:shadow-md hover:from-white hover:to-cedar/5'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-workshop text-xs text-cedar uppercase tracking-wide">
                {slot.period}
              </div>
              <div className="font-craftsman text-lg text-workshop-charcoal">
                {slot.label}
              </div>
            </motion.button>
          ))}
        </div>
        
        {availableTimeSlots.length === 0 && (
          <div className="text-center p-8 bg-limestone/30 rounded-lg">
            <p className="text-cedar">
              Please select a day first to see available times.
            </p>
          </div>
        )}

        {/* Evening availability notice */}
        {journeyData.selectedDate && (
          <motion.div
            className="mt-6 p-4 bg-hill-sage/10 rounded-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-sm text-cedar">
              <strong className="text-workshop-charcoal">Note:</strong> Evening appointments (5PM-7PM) are available Tuesday, Thursday, and Friday only.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="bg-gradient-to-br from-white to-limestone/5 rounded-2xl shadow-xl p-8 border border-limestone/30">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-workshop text-workshop-charcoal mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={contactInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-limestone rounded-xl focus:ring-2 focus:ring-barn-red focus:border-transparent shadow-sm focus:shadow-md transition-all duration-200"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-workshop text-workshop-charcoal mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={contactInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-limestone rounded-xl focus:ring-2 focus:ring-barn-red focus:border-transparent shadow-sm focus:shadow-md transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-workshop text-workshop-charcoal mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={contactInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-limestone rounded-xl focus:ring-2 focus:ring-barn-red focus:border-transparent shadow-sm focus:shadow-md transition-all duration-200"
                placeholder="(512) 555-0123"
              />
            </div>
            <div>
              <label className="block text-sm font-workshop text-workshop-charcoal mb-2">
                Preferred Contact Method
              </label>
              <select
                value={contactInfo.preferredContact}
                onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                className="w-full px-4 py-3 border border-limestone rounded-xl focus:ring-2 focus:ring-barn-red focus:border-transparent shadow-sm focus:shadow-md transition-all duration-200"
              >
                <option value="phone">Phone Call</option>
                <option value="text">Text Message</option>
                <option value="email">Email</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-workshop text-workshop-charcoal mb-2">
              Home Address *
            </label>
            <input
              type="text"
              value={contactInfo.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full px-4 py-3 border border-limestone rounded-lg focus:ring-2 focus:ring-barn-red focus:border-transparent"
              placeholder="Street address, city, state, zip"
            />
            <p className="text-xs text-cedar mt-2">
              We service the greater Austin area including Spicewood, Lakeway, Bee Cave, West Lake Hills, and Dripping Springs
            </p>
          </div>

          {/* Privacy & Value Assurance */}
          <div className="bg-gradient-to-r from-hill-sage/10 to-hill-sage/5 rounded-xl p-4 mb-8 text-left border border-hill-sage/20">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-hill-sage mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-workshop text-workshop-charcoal text-sm mb-1">Your Privacy Matters</h4>
                <p className="text-xs text-cedar">
                  We'll only use your information to schedule your consultation and send you relevant cabinet information. 
                  No spam, no selling your data, no high-pressure sales tactics.
                </p>
              </div>
            </div>
          </div>

          <motion.button
            onClick={handleSubmit}
            disabled={!canSubmit || isSubmitting}
            className={`w-full py-4 rounded-xl font-workshop text-lg transition-all shadow-lg ${
              canSubmit && !isSubmitting
                ? 'bg-gradient-to-r from-barn-red to-barn-red/90 text-white hover:from-barn-red/90 hover:to-barn-red/80 shadow-barn-red/30'
                : 'bg-limestone text-cedar/50 cursor-not-allowed shadow-limestone/30'
            }`}
            whileHover={canSubmit && !isSubmitting ? { scale: 1.02 } : {}}
            whileTap={canSubmit && !isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? 'Scheduling Your Consultation...' : 'Schedule My In-Home Consultation'}
          </motion.button>
        </div>
      </motion.div>

      {/* No consultation type selection - default to in-home */}

      {/* Simplified - no value proposition needed */}

      <div className="flex justify-center mt-8">
        <button
          onClick={onBack}
          className="btn-outline flex items-center"
        >
          <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>
    </motion.div>
  )
}


// Stage 2: Smart Space Assessment
function Stage2SpaceAssessment({ 
  onSelect, 
  onBack, 
  selectedSpace 
}: { 
  onSelect: (space: string) => void
  onBack: () => void
  selectedSpace?: string 
}) {
  // Simplified space options - no "other" option, keep it focused
  const spaceOptions = [
    {
      id: 'kitchen-full',
      title: 'Kitchen - Full Remodel',
      subtitle: 'Complete transformation',
      icon: '🏠'
    },
    {
      id: 'kitchen-refresh',
      title: 'Kitchen - Cabinet Refresh',
      subtitle: 'Update existing space',
      icon: '✨'
    },
    {
      id: 'bathroom-master',
      title: 'Master Bathroom',
      subtitle: 'Custom vanity & storage',
      icon: '🛁'
    },
    {
      id: 'bathroom-guest',
      title: 'Guest Bathroom',
      subtitle: 'Compact efficiency',
      icon: '🚿'
    },
    {
      id: 'laundry-utility',
      title: 'Laundry/Utility',
      subtitle: 'Organization solutions',
      icon: '🧺'
    },
    {
      id: 'entertainment',
      title: 'Entertainment/Built-ins',
      subtitle: 'Custom storage',
      icon: '📺'
    }
  ]

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-craftsman text-workshop-charcoal mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Let's Talk About Your Space
        </motion.h1>
        <motion.p 
          className="text-lg text-cedar max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Every space has unique needs. Tell us about yours.
        </motion.p>
      </div>

      {/* Simple Mobile-First Multiple Choice */}
      <div className="max-w-lg mx-auto space-y-3 mb-8">
        {spaceOptions.map((space, index) => (
          <motion.button
            key={space.id}
            onClick={() => onSelect(space.id)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
              selectedSpace === space.id 
                ? 'border-barn-red bg-barn-red/5 shadow-md' 
                : 'border-limestone bg-white hover:border-cedar/30'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{space.icon}</div>
              <div className="flex-1">
                <h3 className="font-craftsman text-workshop-charcoal">
                  {space.title}
                </h3>
                <p className="text-cedar text-sm">
                  {space.subtitle}
                </p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 ${
                selectedSpace === space.id 
                  ? 'border-barn-red bg-barn-red' 
                  : 'border-limestone'
              }`}>
                {selectedSpace === space.id && (
                  <svg className="w-3 h-3 text-white mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* No "other" option - keep it focused and simple */}

      {/* European Advantage Teaser */}
      <motion.div
        className="bg-hill-sage/10 rounded-xl p-6 max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0 }}
      >
        <div className="text-2xl mb-3">🇪🇺</div>
        <h3 className="text-xl font-craftsman text-workshop-charcoal mb-2">
          Did You Know?
        </h3>
        <p className="text-cedar">
          European frameless construction provides <strong>15% more storage space</strong> than traditional face-frame cabinets. 
          We'll show you exactly how this works in the next step!
        </p>
      </motion.div>

      <div className="flex justify-between max-w-md mx-auto">
        <button
          onClick={onBack}
          className="btn-outline flex items-center"
        >
          <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        
        {/* Auto-advances when selection is made - no continue button needed */}
      </div>
    </motion.div>
  )
}

// Stage 8: Personalized Thank You Message
function Stage8ThankYou({ 
  journeyData,
  onRestart 
}: { 
  journeyData: JourneyData
  onRestart: () => void
}) {
  // Helper function to get style name
  const getStyleName = (styleId?: string) => {
    const style = STYLE_OPTIONS.find(s => s.id === styleId)
    return style?.title || 'Your chosen style'
  }

  // Helper function to format timeline
  const formatTimeline = (timeline?: string) => {
    switch(timeline) {
      case 'immediate': return 'as soon as possible'
      case '3-months': return 'within 3 months'
      case '6-months': return 'within 6 months'
      case 'next-year': return 'sometime next year'
      case 'exploring': return 'while exploring your options'
      default: return 'at your preferred timeline'
    }
  }

  // Helper function to format investment
  const formatInvestment = (investment?: string) => {
    switch(investment) {
      case 'under-25k': return 'under $25,000'
      case '25k-50k': return '$25,000-$50,000'
      case '50k-75k': return '$50,000-$75,000'
      case '75k-100k': return '$75,000-$100,000'
      case 'over-100k': return 'over $100,000'
      default: return 'within your budget'
    }
  }

  // Format selected date
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'your preferred date'
    return new Date(dateStr).toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <motion.div
      className="text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-gradient-to-r from-hill-sage to-hill-sage/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
        >
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-craftsman text-workshop-charcoal mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Your Story Begins Here, {journeyData.contactInfo?.name || 'Friend'}
        </motion.h1>
        
        <motion.div
          className="bg-gradient-to-br from-limestone/30 to-white rounded-2xl p-8 shadow-xl border border-limestone/30 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="craftsman-quote text-xl text-cedar mb-6 italic">
            "Every great kitchen starts with listening. Today, you've shared your vision with us."
          </div>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-barn-red rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-workshop-charcoal font-workshop">
                <strong>Your Dream Style:</strong> You've chosen <span className="text-barn-red font-semibold">{getStyleName(journeyData.style)}</span>
                {journeyData.space && (
                  <span>, perfectly suited for your <span className="text-barn-red font-semibold">{journeyData.space.replace('-', ' ')}</span></span>
                )}
              </p>
            </div>
            
            {journeyData.timeline && (
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-barn-red rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-workshop-charcoal font-workshop">
                  <strong>Your Timeline:</strong> We'll craft your vision <span className="text-barn-red font-semibold">{formatTimeline(journeyData.timeline)}</span>
                </p>
              </div>
            )}
            
            {journeyData.investmentRange && (
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-barn-red rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-workshop-charcoal font-workshop">
                  <strong>Your Investment:</strong> We'll create something extraordinary <span className="text-barn-red font-semibold">{formatInvestment(journeyData.investmentRange)}</span>
                </p>
              </div>
            )}
            
            {journeyData.selectedDate && (
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-barn-red rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-workshop-charcoal font-workshop">
                  <strong>Your Consultation:</strong> We'll meet on <span className="text-barn-red font-semibold">{formatDate(journeyData.selectedDate)}</span> to bring your vision to life
                </p>
              </div>
            )}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-6"
        >
          <div className="bg-hill-sage/10 border-l-4 border-hill-sage rounded-r-xl p-6">
            <h3 className="font-craftsman text-xl text-workshop-charcoal mb-3">What Happens Next?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="bg-hill-sage rounded-full p-2 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <div className="font-workshop font-semibold text-workshop-charcoal">Personal Follow-up</div>
                  <div className="text-cedar text-sm">One of our six craftsmen will call within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-hill-sage rounded-full p-2 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-workshop font-semibold text-workshop-charcoal">Consultation Confirmed</div>
                  <div className="text-cedar text-sm">Your appointment details will be sent via {journeyData.contactInfo?.preferredContact || 'your preferred method'}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onRestart}
              className="btn-outline flex items-center justify-center"
            >
              Start Another Journey
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            
            <a
              href={`tel:(512) 555-0123`}
              className="btn-primary flex items-center justify-center"
            >
              Call Our Workshop Now
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}