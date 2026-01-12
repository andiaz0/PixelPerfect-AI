import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare, hash } from "bcryptjs"
import { createUser, getUserByEmail } from "./users"

declare module "next-auth" {
  interface User {
    role?: "user" | "admin"
  }
  interface Session {
    user: {
      id?: string
      email?: string | null
      name?: string | null
      role?: "user" | "admin"
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "user" | "admin"
    id?: string
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null
          }

          const user = getUserByEmail(credentials.email)
          if (!user) {
            return null
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.password
          )

          if (!isPasswordValid) {
            return null
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          }
        } catch (error) {
          // Log error only in development
          if (process.env.NODE_ENV === "development") {
            // eslint-disable-next-line no-console
            console.error("Authorization error:", error)
          }
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id
        session.user.role = token.role
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-change-in-production",
  debug: process.env.NODE_ENV === "development",
}

export async function registerUser(
  email: string,
  password: string,
  name: string
) {
  const existingUser = getUserByEmail(email)
  if (existingUser) {
    throw new Error("User already exists")
  }

  const hashedPassword = await hash(password, 10)
  return createUser({
    email,
    password: hashedPassword,
    name,
    role: "user",
  })
}
