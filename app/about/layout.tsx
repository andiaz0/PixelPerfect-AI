import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about InvoiceFlow Pro and our mission to streamline measurement-based invoicing for trade teams.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
