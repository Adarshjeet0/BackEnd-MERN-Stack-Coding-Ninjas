// // Please don't change the pre-written code
// // Import the necessary modules here

// export const connectUsingMongoose = async () => {
//   // write your code here
// };
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const url = "mongodb://localhost:27017";
export const connectUsingMongoose = async()=>{
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongodb connected using mongoose");
    }catch(err){
        console.log("Error while connecting to db");
        console.log(err);
    }
}
