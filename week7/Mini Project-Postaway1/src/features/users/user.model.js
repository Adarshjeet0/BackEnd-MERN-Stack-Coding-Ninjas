import {ApplicationError } from '../../error-Handler/applicationError.js';
export default class UserModel{
    static id = 0;
    constructor(name, email, password){
        this.id = ++UserModel.id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static signup(name, email, password){
        let user = new UserModel(name, email, password);
        // Add user to database
        users.push(user);
        return user;
    }

    static signin(email, password){
        // Check if user exists in database
        const result = users.find(user => user.email == email && user.password == password);
        if(!result){
            throw new ApplicationError("Invalid User", 401);
        }
        return result
    }
}

let users = [
    new UserModel("Adarsh1","ada1@gmail.com","1234"),
    new UserModel("Adarsh2","ada2@gmail.com","1234"),
    new UserModel("Adarsh3","ada3@gmail.com","1234")
];