import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tips, and updates about web design, AI, and building better websites.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

