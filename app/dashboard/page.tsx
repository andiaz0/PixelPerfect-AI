import { getSession } from "@/lib/auth-utils"
import { redirect } from "next/navigation"
import { getOrders } from "@/lib/orders"
import DashboardClient from "@/components/dashboard-client"

export const metadata = {
  title: "Dashboard",
  description: "Track subscriptions, payments, and workspace activity.",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function DashboardPage() {
  const session = await getSession()

  if (!session) {
    redirect("/auth/login")
  }

  const userOrders = getOrders().filter(
    (order) => order.customerEmail === session.user?.email
  )

  const totalSpent = userOrders.reduce((sum, order) => sum + (order.amount || 0), 0)

  return (
    <DashboardClient
      userName={session.user?.name || session.user?.email || ""}
      userEmail={session.user?.email || ""}
      orders={userOrders}
      totalSpent={totalSpent}
    />
  )
}
