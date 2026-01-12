import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new PixelPerfect AI account to get started with our premium templates.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

