"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { pricingTiers } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Loader2 } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const tierId = searchParams.get("tier") || "starter"
  const tier = pricingTiers.find((t) => t.id === tierId) || pricingTiers[0]
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tierId: tier.id }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session")
      }

      if (!data.url) {
        throw new Error("No checkout URL provided")
      }

      window.location.href = data.url
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong"
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
      setLoading(false)
    }
  }

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-center">
            Complete Your Purchase
          </h1>

          <Card>
            <CardHeader>
              <CardTitle>{tier.name} Plan</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">
                  {formatPrice(tier.price)}
                </span>
                <span className="text-gray-600 ml-2">/one-time</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={handleCheckout}
                disabled={loading}
                size="lg"
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Proceed to Payment"
                )}
              </Button>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Secure payment powered by Stripe. Your payment information is
              encrypted and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4" aria-label="Loading checkout" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
}
