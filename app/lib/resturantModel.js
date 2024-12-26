import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required!"],
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address!"],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
    address: {
      type: String,
      required: [true, "Address is required!"],
    },
    city: {
      type: String,
      required: [true, "City is required!"],
    },
    restaurantName: {
      type: String,
      required: [true, "Restaurant name is required!"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required!"],
      match: [/^[0-9]{10,15}$/, "Please provide a valid phone number!"],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const RestaurantModel =
  mongoose.models.restaurants ||
  mongoose.model("restaurants", restaurantSchema);
