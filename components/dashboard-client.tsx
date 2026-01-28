"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BadgeCheck,
  CreditCard,
  Receipt,
  ClipboardList,
  Banknote,
  Download,
} from "lucide-react"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"
import { format } from "date-fns"
import { motion } from "framer-motion"
import type { Order } from "@/lib/orders"

interface DashboardClientProps {
  userName: string
  userEmail: string
  orders: Order[]
  totalSpent: number
}

export default function DashboardClient({
  userName,
  userEmail,
  orders,
  totalSpent,
}: DashboardClientProps) {
  const sortedOrders = [...orders].sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
  const latestOrder = sortedOrders[0]

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                Workspace Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, {userName}! Manage your measurement-driven invoicing in one place.
              </p>
              <p className="text-sm text-gray-500 mt-1">Signed in as {userEmail}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Plan</CardTitle>
                  <BadgeCheck className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {latestOrder ? latestOrder.tierName : "Starter"}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {latestOrder?.status === "completed"
                      ? "Subscription active"
                      : "Trial ready"}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Billed</CardTitle>
                  <CreditCard className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{formatPrice(totalSpent)}</div>
                  <p className="text-xs text-gray-600 mt-1">Across all payments</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Next Invoice Run</CardTitle>
                  <Receipt className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {latestOrder ? "In 28 days" : "Set up schedule"}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Syncs with your invoice cycle
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Payments</CardTitle>
                  <CardDescription>
                    Track subscription payments synced to your account.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {orders.length === 0 ? (
                    <div className="text-center py-10">
                      <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No payments yet</h3>
                      <p className="text-gray-600 mb-6">
                        Complete checkout to activate your InvoiceFlow Pro subscription.
                      </p>
                      <Link href="/#pricing">
                        <Button>Choose a Plan</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {sortedOrders.map((order, index) => (
                        <motion.div
                          key={order.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                              <Receipt className="h-5 w-5 text-gray-600" />
                            </div>
                            <div>
                              <p className="font-semibold">{order.tierName} Plan</p>
                              <p className="text-sm text-gray-600">
                                {format(new Date(order.createdAt), "MMM d, yyyy")}
                              </p>
                            </div>
                          </div>
                          <div className="text-right mr-4">
                            <p className="font-semibold">{formatPrice(order.amount)}</p>
                            <p className="text-sm text-gray-600 capitalize">
                              {order.status}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Receipt
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why teams pay for InvoiceFlow Pro</CardTitle>
                  <CardDescription>
                    What you unlock after subscribing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <ClipboardList className="h-5 w-5 text-gray-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Measurement automation</p>
                      <p>Convert m², m³, linear, and count sheets into invoices instantly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Receipt className="h-5 w-5 text-gray-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Branded PDF delivery</p>
                      <p>Send polished invoices with VAT, numbering, and signatures.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Banknote className="h-5 w-5 text-gray-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Payment visibility</p>
                      <p>Track deposits, partials, and overdue balances in one view.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
                <CardDescription>
                  Get your workspace ready for the first project.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="border rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">1. Add your company profile</p>
                  <p>Set VAT, invoice numbering, logo, and default currency.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">2. Create your first client</p>
                  <p>Store addresses, notes, and billing contacts in one place.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">3. Log measurements</p>
                  <p>Start a measurement sheet and auto-generate line items.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
