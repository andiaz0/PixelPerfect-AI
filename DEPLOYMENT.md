# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `STRIPE_SECRET_KEY` - Your Stripe secret key (starts with `sk_test_` for test mode)
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key (starts with `pk_test_` for test mode)
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

3. Add environment variables:

```bash
vercel env add STRIPE_SECRET_KEY
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
```

4. Redeploy:

```bash
vercel --prod
```

## Getting Stripe Keys

1. Go to [dashboard.stripe.com](https://dashboard.stripe.com)
2. Make sure you're in "Test mode"
3. Go to Developers > API keys
4. Copy your keys:
   - Publishable key → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Secret key → `STRIPE_SECRET_KEY`

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test checkout flow (use Stripe test card: 4242 4242 4242 4242)
- [ ] Check admin dashboard
- [ ] Verify responsive design on mobile
- [ ] Update metadata for SEO
- [ ] Set up custom domain (optional)
- [ ] Enable Stripe webhooks for production (optional)

## Test Stripe Cards

Use these test cards in Stripe test mode:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **3D Secure**: 4000 0025 0000 3155

Any future expiry date and any CVC code will work.
