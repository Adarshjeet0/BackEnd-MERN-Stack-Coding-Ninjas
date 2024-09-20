import UserModel from './user.model.js';

export default class UserController{
    signup(req,res){
        const {name,email,password, type} = req.body;
        const user = UserModel.signup(name, email, password, type);
        res.status(200).send(user);
    }
    signin(req,res){
        const {email,password} = req.body;
        const result = UserModel.signin(email,password);
        if(result){
            return res.status(200).send("Login Successful");
        }
        return res.status(401).send("Invalid credentials");
        // res.status(200).send(user);
    }
}