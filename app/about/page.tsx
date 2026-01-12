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
            About PixelPerfect AI
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            We're on a mission to democratize beautiful web design through the
            power of artificial intelligence.
          </p>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 2023, PixelPerfect AI was born from a simple idea:
              what if creating stunning, professional websites didn't require
              months of design work or thousands of dollars? We believe that
              everyone, from solo entrepreneurs to large agencies, should have
              access to world-class website templates.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our AI-powered platform combines cutting-edge technology with
              timeless design principles to generate templates that are not only
              beautiful but also performant, accessible, and easy to customize.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we serve thousands of customers worldwide, helping them
              launch websites faster and more affordably than ever before. Our
              commitment to quality and innovation drives everything we do.
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
                Make professional web design accessible to everyone, regardless
                of budget or technical expertise.
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
                We leverage the latest AI technology to stay ahead of design
                trends and deliver cutting-edge templates.
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
                We build for our community, constantly listening to feedback and
                improving based on real-world needs.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

