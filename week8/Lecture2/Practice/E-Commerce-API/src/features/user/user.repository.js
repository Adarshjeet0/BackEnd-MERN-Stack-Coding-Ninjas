import {getDB} from '../../config/mongodb.js';
import {ApplicationError} from '../../error-Handler/applicationError.js';
export class UserRepository {
    async signup(newUser){
        try {
            // 1. get database
            const db = getDB();

            // 2. Get the collection
            const collection = db.collection('users');

            await collection.insertOne(newuser);
            return newUser;
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with databases", 500);
        }
    }

    async signin(email, password){
        try {
            
        } catch (error) {
            
        }
    }
}