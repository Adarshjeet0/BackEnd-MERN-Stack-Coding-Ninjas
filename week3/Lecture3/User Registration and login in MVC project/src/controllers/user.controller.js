// Please don't change the pre-written code
// Import the necessary modules here
import {users, registerUser, authenticateUser} from '../models/user.model.js';

export default class UserController {
  getRegister = (req, res, next) => {
    // Write your code here
    res.render('user-register');
  };
  getLogin = (req, res, next) => {
    // Write your code here
    res.render('user-login')
  };
  addUser = (req, res) => {
    // Write your code here
    registerUser(req.body)
    res.render('user-login');


  };
  loginUser = (req, res) => {
    // Write your code here
    const isValid = authenticateUser(req.body)
    if(!isValid){
      res.send({ success: "false", message: "login failed" })
    }
    else{
      res.send({ success: "true", message: "login successful" })
    }

  };
}
