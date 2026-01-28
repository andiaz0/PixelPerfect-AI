import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: {
    default: "InvoiceFlow Pro - Measurement-Based Invoicing for Trades",
    template: "%s | InvoiceFlow Pro",
  },
  description:
    "InvoiceFlow Pro helps renovation teams convert measurements into invoices, track payments, and stay VAT-ready.",
  keywords: ["construction invoicing", "measurement sheets", "contractor billing", "renovation software"],
  authors: [{ name: "InvoiceFlow Pro" }],
  creator: "InvoiceFlow Pro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://invoiceflowpro.com",
    title: "InvoiceFlow Pro - Measurement-Based Invoicing for Trades",
    description:
      "InvoiceFlow Pro helps renovation teams convert measurements into invoices, track payments, and stay VAT-ready.",
    siteName: "InvoiceFlow Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoiceFlow Pro - Measurement-Based Invoicing for Trades",
    description:
      "InvoiceFlow Pro helps renovation teams convert measurements into invoices, track payments, and stay VAT-ready.",
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
      <body className={`${inter.variable} antialiased`}>
        <AuthProvider>
          <Navigation />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
