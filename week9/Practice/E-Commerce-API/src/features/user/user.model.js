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