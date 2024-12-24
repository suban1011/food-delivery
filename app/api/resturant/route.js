import dbConnect from "@/app/lib/dbConnect";
import { ResturantModel } from "@/app/lib/resturantModel";
import { NextResponse } from "next/server";

export async function GET() {
  // Ensure database connection
  await dbConnect();
}

export async function POST(req) {
  // Connect to the database
  await dbConnect();

  try {
    // Get and destructure data from the request body
    const body = await req.json();
    const { name, email, password, address, phone, city, resturantName } = body;

    // // Validation checks
    // if (!name || !email || !password) {
    //   return NextResponse.json(
    //     { message: "Name, email, and password are required!" },
    //     { status: 400 }
    //   );
    // }

    // // Check if the email already exists
    // const existingUser = await ResturantModel.findOne({ email });
    // if (existingUser) {
    //   return NextResponse.json(
    //     { message: "Email is already registered!" },
    //     { status: 400 }
    //   );
    // }

    // Create a new restaurant instance
    const newResturant = new ResturantModel({
      name,
      email,
      password, // Note: Hash the password before saving in production!
      address,
      phone,
      city,
      resturantName,
    });

    // Save the restaurant in the database
    await newResturant.save();

    // Return success response
    return NextResponse.json(
      { message: "Registration successful!", data: newResturant },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Registration failed!", error },
      { status: 500 }
    );
  }
}
