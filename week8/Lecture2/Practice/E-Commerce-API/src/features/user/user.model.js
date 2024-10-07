import {getDB} from '../../config/mongodb.js';
// import {getDB} from '../../config/mongodb.js';
import {ApplicationError} from '../../error-Handler/applicationError.js';
export default class UserModel{
    constructor(name, email, password, type){
        this.id = UserModel.uniqueId++;
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }
    static async signup(name, email, password, type){

        try {
            // 1. Get the database 
            const db = getDB();

            // 2. Get the collection
            const collections = db.collection("users");

            const newUser = new UserModel(name, email, password, type);

            await collections.insertOne(newUser);
            return newUser;
        } catch (error) {
            // console.log("Something went wrong");
            throw new ApplicationError("Something went wrong");
            
        }

        // users.push(newUser);
        
    }
    static signin(email, password){
        // console.log(`${email} and ${password}`);
        // console.log("Signin called");
        // const newUser = new UserModel(name, email, password, type);
        const result = users.find((u)=> u.email == email && u.password == password);
        // console.log(result);
        return result || null;
    }
    static uniqueId = 1;

    static getAll(){
        return users;
    }
    static getUser(id){
        return users.find((u)=> u.id == id);
    }
}

// var users = [{"id":1,"name":"ada","email":"ada@gmail.com","password":"1234","type":"Customer"}];
var users = [new UserModel("ada", "ada@gmail.com", "1234", "Customer"),new UserModel("ada", "ada@gmail.com", "1234", "Customer")];