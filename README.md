# PixelPerfect AI - Premium Website Templates

A modern, production-ready website for selling AI-powered website templates. Built with Next.js, TypeScript, Tailwind CSS, Stripe integration, and complete authentication system.

## Features

- 🎨 **Modern Design**: Clean, minimal Apple-like design with smooth animations
- 💳 **Stripe Integration**: Full checkout flow with Stripe (test mode)
- 🔐 **Authentication**: Complete login/register system with NextAuth.js
- 👤 **User Dashboard**: Personal dashboard to manage orders and downloads
- 🛡️ **Admin Panel**: Comprehensive admin dashboard for managing orders and customers
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Optimized for Core Web Vitals and SEO
- 📝 **Blog System**: Built-in blog for content marketing
- ❓ **FAQ Section**: Interactive FAQ section on landing page
- 🎯 **Production Ready**: Configured for Vercel deployment

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Stripe account (for payments)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your keys to `.env.local`:
```
STRIPE_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-min-32-chars
```

5. Generate a secure NextAuth secret:
```bash
openssl rand -base64 32
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Default Credentials

### Admin Account
- **Email**: admin@pixelperfectai.com
- **Password**: admin123

> ⚠️ **Important**: Change the default admin password in production!

### Test User Accounts
You can create your own accounts using the registration page at `/auth/register`.

## Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your test API keys from the Stripe Dashboard
3. Add them to your `.env.local` file
4. The checkout flow is configured for test mode by default

### Test Cards
Use these test cards in Stripe test mode:
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **3D Secure**: 4000 0025 0000 3155

Any future expiry date and any CVC code will work.

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   │   ├── auth/         # NextAuth routes
│   │   └── register/     # User registration
│   ├── admin/             # Admin dashboard
│   ├── auth/              # Authentication pages
│   ├── blog/              # Blog pages
│   ├── checkout/          # Checkout flow
│   ├── dashboard/         # User dashboard
│   └── ...
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...
├── lib/                   # Utilities and data
│   ├── auth.ts           # NextAuth configuration
│   ├── auth-utils.ts     # Auth helper functions
│   ├── users.ts          # User management
│   ├── orders.ts         # Order management
│   └── data.ts           # Sample data
└── public/               # Static assets
```

## Key Pages

- `/` - Landing page with hero, features, pricing, testimonials, and FAQ
- `/auth/login` - User login page
- `/auth/register` - User registration page
- `/dashboard` - User dashboard (protected)
- `/admin` - Admin dashboard (admin only)
- `/checkout` - Checkout page
- `/checkout/success` - Payment success page
- `/blog` - Blog listing
- `/about` - About page
- `/contact` - Contact page

## Customization

- **Branding**: Update the name "PixelPerfect AI" throughout the codebase
- **Pricing**: Modify tiers in `lib/data.ts`
- **Colors**: Adjust Tailwind colors in `app/globals.css`
- **Content**: Update testimonials, features, FAQ, and blog posts in `lib/data.ts`
- **Sample Data**: All sample data is in `lib/data.ts`, `lib/orders.ts`, and `lib/users.ts`

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXTAUTH_URL` (your domain)
   - `NEXTAUTH_SECRET` (generate a secure secret)
4. Deploy!

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Security Notes

- ⚠️ Change default admin password in production
- ⚠️ Use a strong `NEXTAUTH_SECRET` (min 32 characters)
- ⚠️ Use environment variables for all secrets
- ⚠️ In production, use a real database instead of in-memory storage

## License

This project is private and proprietary.

## Support

For support, email support@pixelperfectai.com or visit the Contact page.
"# PixelPerfect-AI" 
