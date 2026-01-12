import { NextRequest, NextResponse } from "next/server"
import { registerUser } from "@/lib/auth"
import { getUserByEmail } from "@/lib/users"

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json()

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if user already exists
    if (getUserByEmail(email)) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      )
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      )
    }

    const user = await registerUser(email, password, name)

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to create user"
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

