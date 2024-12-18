import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const baseUrl = process.env.DB_URL || '0.0.0.0:27017';

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb://${baseUrl}/chatApp`);
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
    }
}
