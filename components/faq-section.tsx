"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    id: "1",
    question: "How does the measurement engine work?",
    answer:
      "Choose area, volume, linear, or count templates, add your dimensions, and InvoiceFlow Pro calculates totals automatically for each room or zone.",
  },
  {
    id: "2",
    question: "Can I customize VAT and invoice numbering?",
    answer:
      "Yes. Set your VAT rate, currency, and invoice prefix (ex: IF-2026-000123) in company settings and apply them across all invoices.",
  },
  {
    id: "3",
    question: "Do you support partial payments and retainers?",
    answer:
      "Absolutely. Track deposits, progress payments, and final balances with clear payment status updates.",
  },
  {
    id: "4",
    question: "Can I export PDFs and email invoices to clients?",
    answer:
      "Every invoice can be exported as a branded PDF and sent directly to clients from the app.",
  },
  {
    id: "5",
    question: "How do teams collaborate on projects?",
    answer:
      "Invite team members, assign roles, and keep measurement sheets, drafts, and payment updates in one shared workspace.",
  },
  {
    id: "6",
    question: "Is there a free trial?",
    answer:
      "Yes. Start a free trial anytime to test measurements, invoicing, and client management before upgrading.",
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
            Learn how InvoiceFlow Pro streamlines measurement-based invoicing
            for trade businesses.
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
