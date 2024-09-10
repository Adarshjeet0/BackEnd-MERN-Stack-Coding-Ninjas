export default class UserModel{
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static users = [];
    // static get(){
    //     return users;
    // }
    static add(name, email, password){
        const newObj = new UserModel(
            this.users.length+1,
            name,
            email,
            password
        )
        this.users.push(newObj)
    }
    static isValidUser(email, password){
        const result = this.users.find(u=>{
            return u.email == email && u.password == password;
        });
        // console.log(result)
        return result;
    }

    
}