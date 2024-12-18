// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";
// dotenv.config();
// let client;
// // const baseUrl = process.env.MONGODB || "0.0.0.0:27017";
// let url = "mongodb://localhost:27017/Expense";

// export async function connectToMongoDB() {
//   try {
//     client = new MongoClient(url); 
//     await client.connect(); 
//     console.log("Database is connected");
// } catch (error) {
//     console.error("Failed to connect to the database", error);
// }
// }

// export const getDB = () => {
//   return client.db("ExpenZap");
// };

// export const closeMongoDBConnection = async () => {
//   try {
//     if (client) {
//       await client.close();
//       console.log("MongoDB connection closed");
//     } else {
//       console.warn("MongoDB client not available for closing");
//     }
//   } catch (err) {
//     console.error("Error closing MongoDB connection:", err);
//   }
// };

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
let client;
const baseUrl = process.env.MONGODB || "0.0.0.0:27017";

export async function connectToMongoDB() {
  try {
    const clientInstance = await MongoClient.connect(
      `mongodb://${baseUrl}/db_name`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    client = clientInstance;
    console.log("Connected to database:", clientInstance.s.url);
  } catch (err) {
    console.log("Error in connecting with mongo");
  }
}

export const getDB = () => {
  return client.db("ExpenZap");
};

export const closeMongoDBConnection = async () => {
  try {
    if (client) {
      await client.close();
      console.log("MongoDB connection closed");
    } else {
      console.warn("MongoDB client not available for closing");
    }
  } catch (err) {
    console.error("Error closing MongoDB connection:", err);
  }
};
