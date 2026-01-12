// Mock order storage - In production, use a database
export interface Order {
  id: string
  orderId: string
  tier: string
  amount: number
  customerEmail: string
  customerName: string
  status: "pending" | "completed" | "cancelled"
  createdAt: string
}

let orders: Order[] = [
  {
    id: "1",
    orderId: "ord_123456",
    tier: "professional",
    amount: 79,
    customerEmail: "sarah@example.com",
    customerName: "Sarah Chen",
    status: "completed",
    createdAt: new Date("2024-01-15").toISOString(),
  },
  {
    id: "2",
    orderId: "ord_123457",
    tier: "starter",
    amount: 29,
    customerEmail: "mike@example.com",
    customerName: "Michael Rodriguez",
    status: "completed",
    createdAt: new Date("2024-01-14").toISOString(),
  },
  {
    id: "3",
    orderId: "ord_123458",
    tier: "agency",
    amount: 199,
    customerEmail: "emily@example.com",
    customerName: "Emily Johnson",
    status: "pending",
    createdAt: new Date("2024-01-16").toISOString(),
  },
]

export function getOrders() {
  return orders
}

export function addOrder(order: Omit<Order, "id" | "createdAt">) {
  const newOrder: Order = {
    ...order,
    id: (orders.length + 1).toString(),
    createdAt: new Date().toISOString(),
  }
  orders.push(newOrder)
  return newOrder
}

export function updateOrderStatus(orderId: string, status: Order["status"]) {
  const order = orders.find((o) => o.id === orderId)
  if (order) {
    order.status = status
  }
  return order
}

export function getOrderById(id: string): Order | undefined {
  return orders.find((o) => o.id === id)
}

