import UserModel from './user.model.js';
import jwt from 'jsonwebtoken';
export default class UserController{


    static signup(req, res){
        
        const {name, email, password} = req.body;
        const user = UserModel.signup(name, email, password);
        if(user){
            return res.status(400).send("Account Created Successfully");
        }
        return res.status(505).send("Something went wrong");
        // const hashedPassword = bcrypt.hashSync(password, 10); 
    }

    static signin(req, res){
        const {email, password} = req.body;
        const result = UserModel.signin(email, password);
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

    }
}