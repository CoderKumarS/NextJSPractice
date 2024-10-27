import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};
export const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    console.log("Connected to database");

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    process.exit(1);
    console.error("Error connecting to database: ", error);
  }
};
