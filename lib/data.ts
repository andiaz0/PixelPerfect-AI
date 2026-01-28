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
    price: 39,
    description: "For solo contractors getting organized",
    features: [
      "1 workspace with company settings",
      "Up to 25 active projects",
      "Measurement sheets + templates",
      "Invoice PDF export",
      "Email support",
    ],
    stripePriceId: "price_starter",
  },
  {
    id: "professional",
    name: "Growth",
    price: 89,
    description: "Best for growing renovation crews",
    features: [
      "Up to 5 team members",
      "Unlimited clients and projects",
      "Auto line items from measurements",
      "Payment tracking + reminders",
      "Custom invoice branding",
      "Priority support",
    ],
    popular: true,
    stripePriceId: "price_professional",
  },
  {
    id: "agency",
    name: "Enterprise",
    price: 199,
    description: "For multi-crew operations",
    features: [
      "Unlimited team members",
      "Multi-workspace reporting",
      "Advanced roles & approvals",
      "Custom measurement workflows",
      "Priority onboarding",
      "Dedicated success manager",
    ],
    stripePriceId: "price_agency",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Elena Rossi",
    role: "Operations Manager",
    company: "Rossi Renovations",
    image: "ER",
    content:
      "InvoiceFlow Pro replaced our spreadsheets overnight. Measurements now become invoices automatically, and cash flow improved immediately.",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Hill",
    role: "Owner",
    company: "Hill Painting Co.",
    image: "MH",
    content:
      "The measurement sheets are the differentiator. My crew logs rooms on-site and we send a branded invoice before we leave.",
    rating: 5,
  },
  {
    id: "3",
    name: "Chloe Nguyen",
    role: "Project Coordinator",
    company: "Northern Drywall",
    image: "CN",
    content:
      "Payment tracking keeps us on top of partials and retainers. The analytics dashboard is exactly what our accountant asked for.",
    rating: 5,
  },
  {
    id: "4",
    name: "Jorge Alvarez",
    role: "Founder",
    company: "Alvarez Plumbing & Heating",
    image: "JA",
    content:
      "We finally standardized invoices across crews. VAT, numbering, and client history are all in one place.",
    rating: 5,
  },
]

export const features: Feature[] = [
  {
    id: "1",
    title: "Measurements to invoices",
    description:
      "Convert m², m³, linear, and count measurements into priced line items automatically.",
    icon: "ruler",
  },
  {
    id: "2",
    title: "Measurement templates",
    description:
      "Use area, volume, linear, and count templates with room grouping for on-site speed.",
    icon: "calculator",
  },
  {
    id: "3",
    title: "Project + client hub",
    description:
      "Track clients, projects, status, and invoice history in one workspace.",
    icon: "file-text",
  },
  {
    id: "4",
    title: "Branded invoicing",
    description:
      "Customize VAT, numbering, logos, and currency with polished PDF exports.",
    icon: "mail",
  },
  {
    id: "5",
    title: "Payment tracking",
    description:
      "Track partials, mark paid, and automatically flag overdue invoices.",
    icon: "shield-check",
  },
  {
    id: "6",
    title: "Revenue analytics",
    description:
      "Visualize monthly revenue, outstanding balances, and top clients.",
    icon: "bar-chart-3",
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to turn site measurements into invoices in minutes",
    excerpt:
      "A step-by-step playbook for capturing measurements on-site and auto-generating accurate line items.",
    content:
      "Accurate measurements are the backbone of every profitable renovation project. In this guide, we cover how to structure measurement sheets, group by room or zone, and convert the totals into invoice-ready line items...",
    author: "Avery Patel",
    date: "2024-02-12",
    image: "/blog-1.jpg",
    slug: "measurements-to-invoices",
  },
  {
    id: "2",
    title: "Reducing disputes with detailed invoice line items",
    excerpt:
      "Detail-rich invoices build trust and cut down on back-and-forth with homeowners and GCs.",
    content:
      "Clients want clarity. By tying measurements to line items and attaching notes or photos, you can avoid common disputes and get paid faster...",
    author: "Jordan Smith",
    date: "2024-02-05",
    image: "/blog-2.jpg",
    slug: "reduce-invoice-disputes",
  },
  {
    id: "3",
    title: "Cash flow tactics for renovation teams",
    excerpt:
      "Use deposits, partial payments, and reminders to stabilize cash flow on every project.",
    content:
      "Cash flow is often the biggest challenge in the trades. We'll cover practical payment structures and how to automate reminders so you spend less time chasing checks...",
    author: "Mia Torres",
    date: "2024-01-28",
    image: "/blog-3.jpg",
    slug: "cash-flow-for-renovation-teams",
  },
]
