import mongoose from "mongoose";

// A flag to track if the app is already connected to MongoDB
let isConnected = false;

const dbConnect = async () => {
  if (isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    const mongoUrl = process.env.MONGO_URI;
    const dbName = "food-delivery";

    await mongoose.connect(mongoUrl, {
      dbName, // Specify the dbName here
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log(`Connected to MongoDB database: ${dbName}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default dbConnect;
