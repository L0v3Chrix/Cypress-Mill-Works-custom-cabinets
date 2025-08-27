'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

export default function ProgressiveFormPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Project Information
    projectType: '',
    timeline: '',
    budget: '',
    location: '',
    
    // European Cabinet Interest
    currentCabinets: '',
    primaryGoal: '',
    designStyle: '',
    specialRequests: ''
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would submit to your CRM/database
    console.log('Form submitted:', formData)
    // Redirect to thank you page or show success message
    alert('Thank you! We\'ll be in touch within 24 hours to schedule your consultation.')
  }

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone
      case 2:
        return formData.projectType && formData.timeline && formData.location
      case 3:
        return formData.budget && formData.primaryGoal
      default:
        return true
    }
  }

  return (
    <main id="main-content" className="flex-1">
      <Navigation />

      {/* Form Hero */}
      <section className="workshop-hero relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h1 className="text-workshop-charcoal leading-tight">
                  Schedule Your European Cabinet
                  <span className="block text-barn-red mt-2">
                    Consultation
                  </span>
                </h1>
                
                <p className="mt-6 text-lg text-cedar leading-relaxed">
                  Start your journey to beautiful European frameless cabinets. 
                  We'll help you explore options, understand the process, and create 
                  a plan that fits your vision and timeline.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-workshop font-medium ${
                  step <= currentStep 
                    ? 'bg-barn-red text-white' 
                    : 'bg-limestone text-cedar'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 ml-4 ${
                    step < currentStep ? 'bg-barn-red' : 'bg-limestone'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-sm text-cedar font-workshop">
              Step {currentStep} of 4: {
                currentStep === 1 ? 'Contact Information' :
                currentStep === 2 ? 'Project Details' :
                currentStep === 3 ? 'Budget & Goals' :
                'Final Details'
              }
            </div>
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="workshop-card p-8"
          >
            <form onSubmit={handleSubmit}>
              
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-craftsman text-2xl text-workshop-charcoal mb-6">
                      Let's Get Acquainted
                    </h3>
                    <p className="text-cedar mb-6">
                      Tell us how to reach you for your European cabinet consultation.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="form-input"
                      required
                      placeholder="(512) 555-0123"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-craftsman text-2xl text-workshop-charcoal mb-6">
                      About Your Project
                    </h3>
                    <p className="text-cedar mb-6">
                      Help us understand your European cabinet project scope and timing.
                    </p>
                  </div>

                  <div>
                    <label className="form-label">Project Type *</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      className="form-input"
                      required
                    >
                      <option value="">Select your project type</option>
                      <option value="kitchen">Kitchen Cabinets</option>
                      <option value="bathroom">Bathroom Vanities</option>
                      <option value="built-ins">Built-in Storage</option>
                      <option value="multiple">Multiple Rooms</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Project Timeline *</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="form-input"
                      required
                    >
                      <option value="">When would you like to start?</option>
                      <option value="immediately">Ready to start immediately</option>
                      <option value="1-3months">Within 1-3 months</option>
                      <option value="3-6months">Within 3-6 months</option>
                      <option value="6-12months">Within 6-12 months</option>
                      <option value="planning">Just planning / exploring options</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Project Location *</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="form-input"
                      placeholder="Austin, Lakeway, Spicewood, etc."
                      required
                    />
                    <p className="text-xs text-cedar/70 mt-2">
                      We serve the greater Austin area and Central Texas Hill Country
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Goals */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-craftsman text-2xl text-workshop-charcoal mb-6">
                      Budget & Priorities
                    </h3>
                    <p className="text-cedar mb-6">
                      Understanding your budget helps us provide the most relevant options.
                    </p>
                  </div>

                  <div>
                    <label className="form-label">Estimated Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="form-input"
                      required
                    >
                      <option value="">Select budget range (optional)</option>
                      <option value="under-25k">Under $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-75k">$50,000 - $75,000</option>
                      <option value="75k-100k">$75,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                    <p className="text-xs text-cedar/70 mt-2">
                      European frameless cabinets are an investment in quality and longevity
                    </p>
                  </div>

                  <div>
                    <label className="form-label">Primary Goal *</label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                      className="form-input"
                      required
                    >
                      <option value="">What's most important to you?</option>
                      <option value="storage">Maximum storage efficiency</option>
                      <option value="aesthetics">Beautiful, modern design</option>
                      <option value="quality">Long-term durability & quality</option>
                      <option value="functionality">Better organization & functionality</option>
                      <option value="investment">Home value investment</option>
                      <option value="european">Authentic European construction</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Current Cabinet Situation</label>
                    <textarea
                      value={formData.currentCabinets}
                      onChange={(e) => handleInputChange('currentCabinets', e.target.value)}
                      className="form-input"
                      rows={3}
                      placeholder="Tell us about your current cabinets and what you'd like to improve..."
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Final Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-craftsman text-2xl text-workshop-charcoal mb-6">
                      Almost Done!
                    </h3>
                    <p className="text-cedar mb-6">
                      Any final details to help us prepare for your consultation?
                    </p>
                  </div>

                  <div>
                    <label className="form-label">Design Style Preference</label>
                    <select
                      value={formData.designStyle}
                      onChange={(e) => handleInputChange('designStyle', e.target.value)}
                      className="form-input"
                    >
                      <option value="">Any style preferences? (optional)</option>
                      <option value="modern">Modern & Contemporary</option>
                      <option value="traditional">Traditional & Classic</option>
                      <option value="transitional">Transitional (mix of both)</option>
                      <option value="rustic">Rustic / Hill Country</option>
                      <option value="minimal">Minimal & Clean</option>
                      <option value="not-sure">Not sure / want guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Special Requests or Questions</label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      className="form-input"
                      rows={4}
                      placeholder="Any specific features, concerns, or questions about European cabinets? We're here to help!"
                    />
                  </div>

                  <div className="p-4 bg-hill-sage/10 border-l-4 border-hill-sage rounded-r-lg">
                    <h4 className="font-workshop font-medium text-workshop-charcoal mb-2">
                      What happens next?
                    </h4>
                    <ul className="text-sm text-cedar space-y-1">
                      <li>• We'll contact you within 24 hours</li>
                      <li>• Schedule a consultation at our Spicewood workshop or your home</li>
                      <li>• Discuss your vision and explore European cabinet options</li>
                      <li>• Create a preliminary design and timeline</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-limestone">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-outline"
                  >
                    Previous
                  </button>
                )}
                
                <div className="flex-1"></div>
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid(currentStep)}
                    className={`btn-primary ${!isStepValid(currentStep) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Schedule Consultation
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-limestone/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-craftsman text-2xl text-workshop-charcoal mb-8">
              Why Choose CMCC for European Cabinets?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏆",
                  title: "European Expertise",
                  description: "Authentic 32mm system construction with premium European hardware"
                },
                {
                  icon: "🤝",
                  title: "Local Commitment", 
                  description: "Spicewood workshop serving Central Texas with personalized service"
                },
                {
                  icon: "⭐",
                  title: "Quality Guarantee",
                  description: "Lifetime craftsmanship warranty on all European cabinet construction"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="font-craftsman text-lg text-workshop-charcoal mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-cedar text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
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