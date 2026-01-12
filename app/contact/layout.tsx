import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PixelPerfect AI. We're here to help with support, inquiries, and questions about our AI-powered website templates.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

