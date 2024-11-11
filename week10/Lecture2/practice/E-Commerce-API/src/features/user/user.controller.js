import UserModel from './user.model.js';
import jwt from 'jsonwebtoken';
import UserRepository from './user.repository.js';
import bcrypt from 'bcrypt';

export default class UserController{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signUp(req,res,next){
        const {name,email,password, type} = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 12);
            // console.log(hashedPassword);
            const user = new UserModel(name, email, hashedPassword, type);
            console.log(user);
            await this.userRepository.signup(user);
            res.status(201).send(user);
        } catch (error) {
            next(error); 
        }

    }
    async signin(req,res){
        try {
            const {email,password} = req.body;
            // console.log(email);
            const user = await this.userRepository.findByEmail(email);
            // console.log(user);
            if(!user){
                return res.status(400).send("Incorrect credentials");
            }
            else{
                const result = await bcrypt.compare(password, user.password);
                // console.log(result);
                if(result){
                    const token = jwt.sign(
                        {
                            userId :user._id,
                            email: email
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: '1h',
                        }
                    );
                    console.log(token)
                    return res.status(200).send(token);
                }else{
                    return res.status(400).send("Incorrect credentials!!!");
                }

            }
            
        } catch (err) {
            console.log(err);
            return res.status(200).send("Something went wrong");
        }
    }

    async resetPassword(req,res){
        const {newPassword} = req.body;
        const hashedPassword = await bcrypt.hash(newPassword, 12)
        const userId = req.userId;
        try{
            await this.userRepository.resetPassword(userId, hashedPassword)
            res.status(200).send("Password is updated");
        }catch(err){
            console.log(err);
            console.log("Passing error to middleware");
            next(err);
        }
    }
    
}