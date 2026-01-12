"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    id: "1",
    question: "What is included in the templates?",
    answer:
      "Each template includes fully responsive HTML/CSS/JS files, source code, documentation, and commercial license. Professional and Agency plans also include Figma design files and priority support.",
  },
  {
    id: "2",
    question: "Can I customize the templates?",
    answer:
      "Yes! All templates are fully customizable. You get the complete source code, so you can modify colors, fonts, layouts, and any other elements to match your brand.",
  },
  {
    id: "3",
    question: "Do I own the templates after purchase?",
    answer:
      "Yes, you receive a commercial license with your purchase. You can use the templates for unlimited projects, including client work. The Agency plan includes extended commercial rights.",
  },
  {
    id: "4",
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support. Starter plan includes 1 month of support, Professional includes 3 months, and Agency includes 12 months. Priority support is available for Professional and Agency plans.",
  },
  {
    id: "5",
    question: "Are the templates mobile-friendly?",
    answer:
      "Absolutely! All templates are built mobile-first and are fully responsive. They look and work perfectly on all devices, from mobile phones to large desktop screens.",
  },
  {
    id: "6",
    question: "How do I get updates?",
    answer:
      "All plans include free updates. When we release new versions or improvements to your purchased templates, you'll receive them automatically at no additional cost.",
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our templates and service.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  {...(openId === faq.id && { 
                    "aria-expanded": "true",
                    "aria-controls": `faq-answer-${faq.id}`
                  })}
                >
                  <span className="font-semibold text-lg pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 shrink-0 transition-transform ${
                      openId === faq.id ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="px-6 pb-6 pt-0">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

