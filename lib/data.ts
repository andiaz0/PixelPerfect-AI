export interface PricingTier {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
  stripePriceId: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  slug: string
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 29,
    description: "Perfect for personal projects and portfolios",
    features: [
      "5 Premium Templates",
      "AI-Generated Components",
      "1 Month Support",
      "Commercial License",
      "Free Updates",
    ],
    stripePriceId: "price_starter",
  },
  {
    id: "professional",
    name: "Professional",
    price: 79,
    description: "Best for freelancers and small agencies",
    features: [
      "20 Premium Templates",
      "AI-Generated Components",
      "3 Months Support",
      "Commercial License",
      "Free Updates",
      "Source Files Included",
      "Priority Email Support",
    ],
    popular: true,
    stripePriceId: "price_professional",
  },
  {
    id: "agency",
    name: "Agency",
    price: 199,
    description: "For teams and large-scale projects",
    features: [
      "Unlimited Templates",
      "AI-Generated Components",
      "12 Months Support",
      "Extended Commercial License",
      "Free Updates",
      "Source Files Included",
      "Priority Support",
      "Dedicated Account Manager",
      "Custom Template Requests",
    ],
    stripePriceId: "price_agency",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Creative Director",
    company: "Design Studio Co.",
    image: "SC",
    content:
      "PixelPerfect AI has transformed how we build websites. The AI-generated templates are incredibly polished and save us hours of design work. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Freelance Developer",
    company: "Independent",
    image: "MR",
    content:
      "The Professional tier is perfect for my freelance work. The templates are modern, clean, and my clients love them. The support team is also incredibly responsive.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Johnson",
    role: "Marketing Manager",
    company: "TechStart Inc.",
    image: "EJ",
    content:
      "We used PixelPerfect AI for our startup's website and were blown away by the quality. The AI components are so well-crafted and the entire process was seamless.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Kim",
    role: "Agency Owner",
    company: "Digital Ventures",
    image: "DK",
    content:
      "The Agency plan gives us unlimited access to templates that we can use across all our client projects. It's been a game-changer for our workflow and profitability.",
    rating: 5,
  },
]

export const features: Feature[] = [
  {
    id: "1",
    title: "AI-Powered Generation",
    description:
      "Our advanced AI creates stunning, production-ready templates tailored to your needs in minutes.",
    icon: "sparkles",
  },
  {
    id: "2",
    title: "Fully Responsive",
    description:
      "Every template is designed mobile-first and looks perfect on all devices and screen sizes.",
    icon: "smartphone",
  },
  {
    id: "3",
    title: "Modern Components",
    description:
      "Access to a library of beautifully crafted components built with the latest web standards.",
    icon: "layers",
  },
  {
    id: "4",
    title: "Easy Customization",
    description:
      "Clean, well-documented code that's easy to customize and extend to match your brand.",
    icon: "palette",
  },
  {
    id: "5",
    title: "Fast Performance",
    description:
      "Optimized for speed with minimal dependencies and best practices for Core Web Vitals.",
    icon: "zap",
  },
  {
    id: "6",
    title: "Lifetime Updates",
    description:
      "Get access to new templates and components as we release them, included in your plan.",
    icon: "download",
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Design: AI-Powered Templates",
    excerpt:
      "Discover how artificial intelligence is revolutionizing web design and making professional websites accessible to everyone.",
    content:
      "Artificial intelligence is transforming the way we approach web design. With AI-powered templates, designers and developers can create stunning, professional websites in a fraction of the time...",
    author: "Alex Morgan",
    date: "2024-01-15",
    image: "/blog-1.jpg",
    slug: "future-of-web-design-ai-templates",
  },
  {
    id: "2",
    title: "10 Essential Features Every Modern Website Needs",
    excerpt:
      "Learn about the must-have features that will make your website stand out and provide an exceptional user experience.",
    content:
      "In today's competitive digital landscape, your website needs to be more than just functional—it needs to be exceptional. Here are 10 essential features that every modern website should have...",
    author: "Jessica Lee",
    date: "2024-01-10",
    image: "/blog-2.jpg",
    slug: "10-essential-website-features",
  },
  {
    id: "3",
    title: "Design Trends for 2024: What's Next?",
    excerpt:
      "Stay ahead of the curve with these cutting-edge design trends that will define web design in 2024.",
    content:
      "As we move into 2024, web design continues to evolve. From bold typography to minimalist interfaces, here's what's trending in the world of web design...",
    author: "Marcus Thompson",
    date: "2024-01-05",
    image: "/blog-3.jpg",
    slug: "design-trends-2024",
  },
]

