"use client"

import { useState } from "react"
import { updateOrderStatus } from "@/lib/orders"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import { format } from "date-fns"
import { CheckCircle, Clock, Users, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// ---- Types ----

type OrderStatus = "completed" | "pending" | "cancelled"

interface Order {
  id: string
  orderId: string
  customerName: string
  customerEmail: string
  tier: string
  amount: number
  status: OrderStatus
  createdAt: string | Date
}

interface Customer {
  id: string
  name: string
  email: string
  role: string // or "admin" | "user" etc. if you want stricter typing
}

interface AdminDashboardClientProps {
  orders: Order[]
  customers: Customer[]
}

// ---- Component ----

export default function AdminDashboardClient({
  orders: initialOrders,
  customers,
}: AdminDashboardClientProps) {
  const [orders, setOrders] = useState<Order[]>(initialOrders)

  const handleStatusUpdate = (orderId: string, newStatus: OrderStatus) => {
    // If updateOrderStatus is async, you can make this function async and await it
    updateOrderStatus(orderId, newStatus)

    // Update local state
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    )
  }

  const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0)
  const completedOrders = orders.filter((o) => o.status === "completed").length
  const pendingOrders = orders.filter((o) => o.status === "pending").length

  const uniqueCustomers = new Set(orders.map((o) => o.customerEmail)).size

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
              Admin Dashboard
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {formatPrice(totalRevenue)}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    From {orders.length} orders
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Orders
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{completedOrders}</div>
                  <p className="text-xs text-gray-600 mt-1">
                    Successfully processed
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pending Orders
                  </CardTitle>
                  <Clock className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{pendingOrders}</div>
                  <p className="text-xs text-gray-600 mt-1">
                    Awaiting action
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Customers
                  </CardTitle>
                  <Users className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{uniqueCustomers}</div>
                  <p className="text-xs text-gray-600 mt-1">
                    Unique customers
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="orders" className="space-y-4">
              <TabsList>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="customers">Customers</TabsTrigger>
              </TabsList>

              {/* Orders Tab */}
              <TabsContent value="orders" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>
                      Manage and track all customer orders
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-semibold text-sm">
                              Order ID
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm">
                              Customer
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm">
                              Tier
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm">
                              Amount
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm">
                              Status
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm">
                              Date
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order, index) => (
                            <motion.tr
                              key={order.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.05,
                              }}
                              className="border-b hover:bg-gray-50"
                            >
                              <td className="py-4 px-4 text-sm font-mono">
                                {order.orderId}
                              </td>
                              <td className="py-4 px-4">
                                <div>
                                  <div className="text-sm font-medium">
                                    {order.customerName}
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    {order.customerEmail}
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 px-4 text-sm capitalize">
                                {order.tier}
                              </td>
                              <td className="py-4 px-4 text-sm font-semibold">
                                {formatPrice(order.amount)}
                              </td>
                              <td className="py-4 px-4">
                                <Badge
                                  variant={
                                    order.status === "completed"
                                      ? "default"
                                      : order.status === "pending"
                                      ? "secondary"
                                      : "destructive"
                                  }
                                >
                                  {order.status}
                                </Badge>
                              </td>
                              <td className="py-4 px-4 text-sm text-gray-600">
                                {format(new Date(order.createdAt), "MMM d, yyyy")}
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex gap-2">
                                  {order.status === "pending" && (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() =>
                                        handleStatusUpdate(order.id, "completed")
                                      }
                                    >
                                      <CheckCircle className="h-4 w-4 mr-1" />
                                      Complete
                                    </Button>
                                  )}
                                </div>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Customers Tab */}
              <TabsContent value="customers" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Customers</CardTitle>
                    <CardDescription>
                      View all registered customers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {customers.map((customer, index) => (
                        <motion.div
                          key={customer.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                          }}
                          className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
                              {customer.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-semibold">{customer.name}</p>
                              <p className="text-sm text-gray-600">
                                {customer.email}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={
                              customer.role === "admin" ? "default" : "secondary"
                            }
                          >
                            {customer.role}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
