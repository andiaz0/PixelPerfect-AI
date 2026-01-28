import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tips, and updates for renovation and construction invoicing teams.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
