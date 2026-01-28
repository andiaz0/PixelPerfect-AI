"use client"

import { features } from "@/lib/data"
import { motion } from "framer-motion"
import {
  Ruler,
  FileText,
  Calculator,
  Mail,
  BarChart3,
  ShieldCheck,
} from "lucide-react"

const iconMap: Record<string, any> = {
  ruler: Ruler,
  "file-text": FileText,
  calculator: Calculator,
  mail: Mail,
  "bar-chart-3": BarChart3,
  "shield-check": ShieldCheck,
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Built for renovation and construction invoicing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            InvoiceFlow Pro keeps your crews focused on the job while the system
            handles measurements, invoicing, and cash flow tracking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Ruler
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border h-full hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
