<<<<<<< HEAD
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import AuthProvider from "@/components/session-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

=======
import type { Metadata } from "next";
import "./globals.css";

>>>>>>> 7d39af4440e82150937a4593add25f0fda986ecc
export const metadata: Metadata = {
  title: {
    default: "PixelPerfect AI - Premium AI-Powered Website Templates",
    template: "%s | PixelPerfect AI",
  },
  description:
    "Build stunning websites with AI-powered templates. Professional, responsive designs for modern businesses.",
  keywords: ["website templates", "AI templates", "web design", "Next.js templates"],
  authors: [{ name: "PixelPerfect AI" }],
  creator: "PixelPerfect AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixelperfectai.com",
    title: "PixelPerfect AI - Premium AI-Powered Website Templates",
    description: "Build stunning websites with AI-powered templates. Professional, responsive designs for modern businesses.",
    siteName: "PixelPerfect AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelPerfect AI - Premium AI-Powered Website Templates",
    description: "Build stunning websites with AI-powered templates. Professional, responsive designs for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${inter.variable} antialiased`}>
        <AuthProvider>
          <Navigation />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <Toaster />
        </AuthProvider>
=======
      <body className="antialiased">
        {children}
>>>>>>> 7d39af4440e82150937a4593add25f0fda986ecc
      </body>
    </html>
  )
}
