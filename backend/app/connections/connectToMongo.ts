import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("CONNECTED TO DB");
  } catch (e) {
    throw "FAILED TO CONNECT";
  }
};
