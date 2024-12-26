import dbConnect from "@/app/lib/dbConnect";
import { RestaurantModel } from "@/app/lib/resturantModel";
import { NextResponse } from "next/server";
import { HashPassword } from "../helpers/hashedPassword";

export async function GET() {
  // Ensure database connection
  await dbConnect();

  try {
    const restaurant = await RestaurantModel.find();
    return NextResponse.json(
      restaurant,
      { message: "Done", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      restaurant,
      { error: "Internal server error", success: false },
      { status: 200 }
    );
  }
}


//register restaurant
export async function POST(req) {
  // Connect to the database
  await dbConnect();

  try {
    // Get and destructure data from the request body
    const body = await req.json();
    const { name, email, password, address, phone, city, restaurantName } =
      body;

    // // Validation checks
    if (
      !name ||
      !email ||
      !password ||
      !address ||
      !phone ||
      !city ||
      !restaurantName
    ) {
      return NextResponse.json(
        { warning: "All fields are required!", success: false },
        { status: 201 }
      );
    }

    // Check if the email already exists
    const existingUser = await RestaurantModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { warning: "Email is already registered!", success: false },
        { status: 201 }
      );
    }
    //hashing password
    const hashedPassword = HashPassword(password);

    // Create a new restaurant instance
    const newRestaurant = new RestaurantModel({
      name,
      email,
      password: hashedPassword, // Note: Hash the password before saving in production!
      address,
      phone,
      city,
      restaurantName,
    });

    // Save the restaurant in the database
    await newRestaurant.save();

    // Return success response
    return NextResponse.json(
      {
        message: "Registration successful please login!",
        data: newRestaurant,
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Registration failed..!", error, success: false },
      { status: 500 }
    );
  }
}
