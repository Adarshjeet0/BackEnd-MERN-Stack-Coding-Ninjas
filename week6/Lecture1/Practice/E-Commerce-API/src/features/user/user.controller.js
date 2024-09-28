import UserModel from './user.model.js';
import jwt from 'jsonwebtoken';

export default class UserController{
    signup(req,res){
        const {name,email,password, type} = req.body;
        const user = UserModel.signup(name, email, password, type);
        res.status(200).send(user);
    }
    signin(req,res){
        console.log(req);
        const {email,password} = req.body;
        const result = UserModel.signin(email,password);
        if(result){
            const token = jwt.sign(
                {
                    userId :result.id,
                    email: email
                },
                'qwertyuiop',
                {
                    expiresIn: '1h',
                }
            )
            console.log(token)
            return res.status(200).send(token);
        }else{
            return res.status(401).send("Invalid credentials");

        }
        // res.status(200).send(user);
    }
}