// Please don't change the pre-written code
// Import the necessary modules here
import {getAllUsers,confirmLogin, addUser} from '../model/user.model.js';

export const registerUser = (req, res, next) => {
  // Write your code here
  const result = addUser(req.body); 
  // if(result){
    const obj = {
      "status":"success",
      "user":result
    }
    res.status(200).send(obj);
  // }
  // next();
};

export const loginUser = (req, res) => {
  // Write your code here
  const rs = confirmLogin(req.body);
  if(rs){
    const obj = {
      "status":"success",
      "msg": "login successfull"

    }
    return res.status(200).json(obj);
  }
  const obj = {
    "status":"failure",
    "msg":"invalid user details"
  }
  return res.status(400).json(obj);
};
