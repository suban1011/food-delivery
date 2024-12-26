import dbConnect from "@/app/lib/dbConnect";
import { RestaurantModel } from "@/app/lib/resturantModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { ComparePassword } from "../../helpers/hashedPassword";
import cookie from "cookie";
//Login
export const POST = async (request) => {
  // Connect to the database
  await dbConnect();

  try {
    // Parse the incoming request body
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { warning: "Email and password are required." },
        { status: 400 }
      );
    }

    // Find restaurant by email
    const restaurant = await RestaurantModel.findOne({ email }).select(
      "password"
    );
    if (!restaurant) {
      return NextResponse.json(
        { warning: "Email not registered.", success: false },
        { status: 201 }
      );
    }

    // Compare the provided password with the stored hashed password
    const comparedPassword = ComparePassword(password, restaurant.password);
    if (!comparedPassword) {
      return NextResponse.json(
        { warning: "Invalid email or password.", success: false },
        { status: 201 }
      );
    }

    // Check if the JWT secret key is available
    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT Secret Key is missing in environment variables.");
    }

    // Generate JWT token
    const token = jwt.sign({ id: restaurant._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    // Store the token in a cookie
    const response = NextResponse.json(
      {
        restaurant: restaurant,
        message: "Login successful!",
        success: true,
        token: token,
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Ensures HTTPS in production
      maxAge: 7 * 24 * 60 * 60, // Cookie expires in 7 days
      path: "/", // Cookie accessible across all pages
    });

    return response;
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
};
