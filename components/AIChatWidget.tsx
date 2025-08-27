'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ChatMessage {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: Date
}

const SUGGESTED_QUESTIONS = [
  "What makes European cabinets different?",
  "How long does installation take?",
  "Do you service my area?",
  "Can I see examples of your work?",
  "What's included in consultation?",
]

const AI_RESPONSES: Record<string, string> = {
  "What makes European cabinets different?": "Imagine opening a drawer and hearing nothing but the whisper of precision. Frameless construction isn't just about 20% more storage—it's about the mastery Mike learned from old-world craftsmen, where every millimeter matters and every piece tells a story of generations of skill.",
  
  "How long does installation take?": "Most kitchen cabinet installations take 3-5 days depending on size and complexity. We handle all phases from removal of old cabinets to final adjustments, ensuring minimal disruption to your daily routine.",
  
  "Do you service my area?": "We proudly serve the greater Austin area including Spicewood, Lakeway, Bee Cave, West Lake Hills, Dripping Springs, Cedar Park, and Round Rock. If you're outside this area, let's discuss - we sometimes make exceptions for special projects.",
  
  "Can I see examples of your work?": "Absolutely! We have an extensive portfolio showcasing over 30 completed projects from modern minimalist to traditional Hill Country styles. You can also schedule a workshop tour to see our craftsmanship process firsthand.",
  
  "What's included in consultation?": "When our team steps into your home, we're not just measuring spaces—we're listening to how your family lives. Our consultation includes understanding your daily rhythms, sharing material samples that tell their own stories, and crafting a timeline that respects both your vision and our three-generation commitment to perfection.",
  
  "default": "Thanks for your question! Every great kitchen begins with a conversation. Our CMCC workshop family—six craftsmen strong across three generations—have been crafting stories in wood for over thirty years. For answers tailored to your vision, I'd love to connect you with our team who can listen to your dreams and help bring them to life."
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hi! I'm here to help with your custom cabinet dreams. Our CMCC workshop family—six craftsmen across three generations—have been turning Hill Country wood into family heirlooms for over thirty years. What story would you like your kitchen to tell?",
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSendMessage = async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const response = AI_RESPONSES[content] || AI_RESPONSES.default
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      handleSendMessage(inputValue.trim())
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-barn-red to-barn-red/90 hover:from-barn-red/90 hover:to-barn-red/80 text-white rounded-full p-4 shadow-2xl hover:shadow-barn-red/30 transition-all duration-300 border-2 border-white/20"
          >
            <div className="relative">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4v-4z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-hill-sage rounded-full animate-pulse"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-white to-limestone/5 rounded-2xl shadow-2xl border border-limestone/30 w-80 h-96 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-workshop-charcoal to-workshop-charcoal/90 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-barn-red to-barn-red/90 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0h3m-3 0h5m2-4V9m0 0V7a2 2 0 012-2h2a2 2 0 012 2v2m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-craftsman text-lg">CMCC Workshop</h3>
                  <p className="text-white/80 text-xs font-workshop">Hill Country Craft Expert</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl shadow-sm ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-barn-red to-barn-red/90 text-white'
                        : 'bg-gradient-to-br from-limestone/50 to-white border border-limestone/30'
                    }`}
                  >
                    <p className={`text-sm font-workshop leading-relaxed ${
                      message.sender === 'user' ? 'text-white' : 'text-workshop-charcoal'
                    }`}>
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Suggested Questions (show after initial message) */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="space-y-2"
                >
                  <p className="text-xs text-cedar font-workshop mb-2">Popular questions:</p>
                  {SUGGESTED_QUESTIONS.slice(0, 3).map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="block w-full text-left text-xs text-cedar hover:text-barn-red bg-limestone/30 hover:bg-limestone/50 p-2 rounded-lg transition-colors font-workshop"
                    >
                      {question}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gradient-to-br from-limestone/50 to-white border border-limestone/30 p-3 rounded-2xl shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-cedar rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-cedar rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-cedar rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-limestone/30">
              <form onSubmit={handleInputSubmit} className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about our custom cabinets..."
                  className="flex-1 px-3 py-2 border border-limestone/30 rounded-xl bg-gradient-to-br from-white to-limestone/5 text-sm font-workshop focus:outline-none focus:ring-2 focus:ring-barn-red focus:border-transparent shadow-sm"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-barn-red to-barn-red/90 hover:from-barn-red/90 hover:to-barn-red/80 disabled:from-limestone disabled:to-limestone/80 text-white p-2 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
              <p className="text-xs text-cedar/60 mt-2 font-workshop text-center">
                For your personal story, schedule a free consultation
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}