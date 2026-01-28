"use client"

import { motion } from "framer-motion"
import { Sparkles, Users, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-center">
            About InvoiceFlow Pro
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            We're on a mission to help trade businesses turn measurements into
            accurate invoices without the admin headache.
          </p>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              InvoiceFlow Pro was created alongside renovation crews who were
              tired of juggling measurements, spreadsheets, and invoice PDFs.
              We built a focused platform that links measurements directly to
              priced line items, so invoicing is fast, accurate, and easy to
              explain to clients.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              From painters and drywallers to plumbers and insulation teams, we
              help companies standardize pricing, track payments, and keep every
              project organized in a single workspace.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our commitment is simple: remove admin friction so crews can focus
              on craftsmanship while the business stays profitable and compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Help every trade business invoice faster and get paid with
                confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We automate measurements, line items, and analytics so teams can
                scale without extra admin.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We listen to contractors and crew leads to ship tools that solve
                real on-site workflows.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
