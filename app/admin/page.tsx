import { requireAdmin } from "@/lib/auth-utils"
import { getOrders } from "@/lib/orders"
import { getUsers } from "@/lib/users"
import AdminDashboardClient from "@/components/admin-dashboard-client"

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin panel for managing subscriptions and customers.",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function AdminPage() {
  const session = await requireAdmin()

  const orders = getOrders()
  const customers = getUsers()

  return <AdminDashboardClient orders={orders} customers={customers} />
}
