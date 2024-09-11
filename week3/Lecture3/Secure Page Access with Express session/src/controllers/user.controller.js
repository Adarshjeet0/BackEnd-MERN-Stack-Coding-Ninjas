import { authenticateUser, registerUser } from "../models/user.model.js";

export default class UserController {
  getRegister = (req, res, next) => {
    res.render("user-register");
  };
  getLogin = (req, res, next) => {
    res.render("user-login");
  };
  addUser = (req, res) => {
    console.log(req.body);
    const status = registerUser(req.body);
    console.log(status);
    if (status) return res.render("user-login");
  };
  loginUser = (req, res) => {
    // console.log(req.body)
    const isAuth = authenticateUser(req.body);
    // console.log(isAuth);
    if (isAuth) {
      req.session.userEmail = req.body.email;
      res.render("msgPage", { message: "login successfull" });
    } else res.render("msgPage", { message: "login failed" });
  };
  getSecure = (req, res) => {
    if(req.session.userEmail){
      res.render("secure-page");
    }else{
      res.render("msgPage",{message:"login first to access secure page"});
    }
    // res.render("secure-page");
  };
  userLogout = (req, res) => {
    req.session.destroy((err) => {
      if (err) res.status(401).send(err);
      else res.redirect("/login");
    });
  };
}
