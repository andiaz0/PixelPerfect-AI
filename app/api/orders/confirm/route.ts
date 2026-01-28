import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { pricingTiers } from "@/lib/data"
import { addOrder, getOrderByOrderId } from "@/lib/orders"

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { sessionId, tierId } = await request.json()

    if (!sessionId || !tierId) {
      return NextResponse.json(
        { error: "Missing sessionId or tierId" },
        { status: 400 }
      )
    }

    const tier = pricingTiers.find((item) => item.id === tierId)
    if (!tier) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 })
    }

    const existingOrder = getOrderByOrderId(sessionId)
    if (existingOrder) {
      return NextResponse.json({ order: existingOrder })
    }

    const order = addOrder({
      orderId: sessionId,
      tierId: tier.id,
      tierName: tier.name,
      amount: tier.price,
      customerEmail: session.user.email,
      customerName: session.user.name || session.user.email,
      status: "completed",
    })

    return NextResponse.json({ order })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to confirm order"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
