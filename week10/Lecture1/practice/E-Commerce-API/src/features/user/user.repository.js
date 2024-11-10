import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";
import {ApplicationError} from '../../error-Handler/applicationError.js';



// creating model from schema.
const UserModel = mongoose.model('users', userSchema)

export default class UserRepository{

    async signup(user){
        try{
            // create instance of model.
            const newUser = new UserModel(user);
            await newUser.save();
            return newUser;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

    async signin(email, password){
        try{
           return await UserModel.findOne({email, password});
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

    async findByEmail(email) {
        try{
        return await UserModel.findOne({email});
      }catch(err){
        console.log(err);
        throw new ApplicationError("Something went wrong with database", 500);
      }
    }

    async resetPassword(userId, hashedPassword){
        try {
            const user = await UserModel.findById(userId);
            if(user){
                user.password = hashedPassword;
                user.save();
            }else{
                throw new ApplicationError("Somenthing went wrong with databases",500);
            }
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }
}