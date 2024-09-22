export default class UserModel{
    constructor(name, email, password, type){
        this.id = uniqueId++
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }
    static signup(name, email, password, type){
        const newUser = new UserModel(name, email, password, type);
        users.push(newUser);
        return newUser;
    }
    static signin(email, password){
        // const newUser = new UserModel(name, email, password, type);
        const result = users.find((u)=> u.email == email && u.password == password);
        return result || null;
    }
    static uniqueId = 2;

    static getAll(){
        return users;
    }
}

var users = [{"id":1,"name":"ada","email":"ada@gmail.com","password":"1234","type":"Customer"}];