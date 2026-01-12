import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { pricingTiers } from "@/lib/data"

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not set")
  }
  return new Stripe(secretKey, {
    apiVersion: "2025-12-15.clover",
  })
}

export async function POST(request: NextRequest) {
  try {
    const { tierId } = await request.json()

    const tier = pricingTiers.find((t) => t.id === tierId)
    if (!tier) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 })
    }

    // Create Stripe checkout session
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `PixelPerfect AI - ${tier.name}`,
              description: tier.description,
            },
            unit_amount: tier.price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.headers.get("origin") || ""}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin") || ""}/checkout?tier=${tierId}`,
      metadata: {
        tierId: tier.id,
      },
    })

    if (!session.url) {
      return NextResponse.json(
        { error: "Failed to create checkout session URL" },
        { status: 500 }
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    // Log error only in development
    if (process.env.NODE_ENV === "development") {
      console.error("Stripe error:", error)
    }
    const errorMessage = error instanceof Error ? error.message : "Failed to create checkout session"
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

