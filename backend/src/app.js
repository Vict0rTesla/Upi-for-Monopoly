import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

const app = express()

const start = async () => {
  const connectionDB = await mongoose.connect(process.env.MONGO_URL)
  console.log(`DB connected PORT: ${connectionDb.connection.host}`);
  app.listen(8000, () => {
    console.log("Listing on port: 8000");
  });
}

start()
