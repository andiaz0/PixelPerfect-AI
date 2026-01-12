"use client"

import Link from "next/link"
import { blogPosts } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, User } from "lucide-react"
import { format } from "date-fns"

export default function BlogPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-center">
            Blog
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Insights, tips, and updates about web design, AI, and building
            better websites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} aria-label={`Read article: ${post.title}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <div 
                      className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl"
                      role="img"
                      aria-label={`Featured image for ${post.title}`}
                    />
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {format(new Date(post.date), "MMM d, yyyy")}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

