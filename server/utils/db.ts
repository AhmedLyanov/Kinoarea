import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
  const uri = process.env.DB_URI;

  if (!uri) {
    throw new Error("DB_URI is missing");
  }

  try {
    await mongoose.connect(uri);

    console.log("🍃 MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed", error);

    process.exit(1);
  }
}