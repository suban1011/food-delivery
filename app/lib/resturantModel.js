import mongoose from "mongoose";

const resturantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required !!"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required !!"],
  },
  password: {
    type: String,
    require: [true, "Password is required !!"],
  },
});

export const ResturantModel =
  mongoose.models.resturants || mongoose.model("resturants", resturantSchema);
