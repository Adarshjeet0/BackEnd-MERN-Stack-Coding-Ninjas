import UserModel from './user.model.js';
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
        const isValid = UserModel.signin(email, password);
        if(isValid){
            return res.status(400).send("Login Successfully");
        }else{
            return res.status(505).send("Invalid Credentials");
        }

    }
}