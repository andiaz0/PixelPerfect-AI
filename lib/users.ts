// Mock user storage - In production, use a database
export interface User {
  id: string
  email: string
  password: string
  name: string
  role: "user" | "admin"
  createdAt: string
}

// Default admin password: admin123
// Hashed using bcrypt with 10 rounds
const users: User[] = [
  {
    id: "1",
    email: "admin@pixelperfectai.com",
    password: "$2b$10$kAGmfH8g/KVx/92.MOTMouUzuSU1mCZgyKaQKA/aaCBkdtnC0q59K",
    name: "Admin User",
    role: "admin",
    createdAt: new Date().toISOString(),
  },
]

export function getUsers() {
  return users.map(({ password, ...user }) => user)
}

export function getUserById(id: string) {
  const user = users.find((u) => u.id === id)
  if (!user) return null
  const { password, ...userWithoutPassword } = user
  return userWithoutPassword
}

export function getUserByEmail(email: string): User | null {
  return users.find((u) => u.email === email) || null
}

export function createUser(userData: Omit<User, "id" | "createdAt">) {
  const newUser: User = {
    ...userData,
    id: (users.length + 1).toString(),
    createdAt: new Date().toISOString(),
  }
  users.push(newUser)
  const { password, ...userWithoutPassword } = newUser
  return userWithoutPassword
}

export function updateUser(id: string, updates: Partial<User>) {
  const index = users.findIndex((u) => u.id === id)
  if (index === -1) return null

  users[index] = { ...users[index], ...updates }
  const { password, ...userWithoutPassword } = users[index]
  return userWithoutPassword
}
