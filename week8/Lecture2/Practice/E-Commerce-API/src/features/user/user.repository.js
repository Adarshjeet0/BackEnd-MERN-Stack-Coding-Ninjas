import {getDB} from '../../config/mongodb.js';
import {ApplicationError} from '../../error-Handler/applicationError.js';
export default class UserRepository {
    async signup(newUser){
        try {
            // 1. get database
            const db = getDB();

            // 2. Get the collection
            const collection = db.collection('users');

            await collection.insertOne(newUser);
            return newUser;
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with databases", 500);
        }
    }

    async signin(email){
        try {
            // 1. get database
            const db = getDB();

            // 2. Get the collection
            const collection = db.collection('users');
            return await collection.findOne({email});
            
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with databases", 500);
        }
    }
    async findByEmail(email) {
        try{
          // 1. Get the database
        const db = getDB();
        // 2. Get the collection
        const collection = db.collection("users");
        
        // 3. Find the document.
        return await collection.findOne({email});
        } catch(err){
          console.log(err);
          throw new ApplicationError("Something went wrong with database", 500);
        }
      }
    
}