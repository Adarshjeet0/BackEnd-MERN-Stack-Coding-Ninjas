import UserModel from '../models/user.model.js';
import ProductModel from '../models/product.model.js';

export default class UserController{
    getRegister(req,res){
        res.render('register', {userEmail: null});
    }
    postRegister(req,res){
        const {name, email, password} = req.body;
        // console.log(req.body);
        UserModel.add(name,email,password);
        res.render('login',{errors:null});
    }
    getLogin(req,res){
        res.render('login',{errors:null});
    }
    postLogin(req,res){
        // console.log(req.body);
        const {email,password} = req.body;
        const validUser = UserModel.isValidUser(email,password);
        if(!validUser){
            return res.render('login',{errors:"Invalid Credentials"});
        }
        req.session.userEmail=email;
        res.render('product',{products:ProductModel.get(), userEmail: req.session.userEmail});
    }
    logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                res.status(401).send(err);
            }else{
                res.redirect("/login");
            }

        })
    }
}