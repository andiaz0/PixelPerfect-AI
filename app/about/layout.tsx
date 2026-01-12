import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about PixelPerfect AI and our mission to democratize beautiful web design through the power of artificial intelligence.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

