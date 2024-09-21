// Please don't change the pre-written code
// Import the necessary modules here
import {getAllUsers} from "../features/user/model/user.model.js";

// const basicAuthMiddleware = () => {
//   // Write your code here
// };


const basicAuthMiddleware = (req, res, next)=>{
  const authHeader = req.headers["authorization"];

  //1. if authorization header is empty

  if(!authHeader){
      return res.status(401).send("No such credentials are found");
  }

  //2. Extract credentials. Format: [Basic qerqetreywryetuetyetrytyk....];
  const base64credentails = authHeader.replace('Basic ','');

  // 3. Decode credentials
  const decodedCreds = Buffer.from(base64credentails, 'base64').toString('utf8');
  console.log(decodedCreds);

  const creds = decodedCreds.split(':');

  // 4. 
  const user = getAllUsers().find(u=> u.email == creds[0] && u.password == creds[1]);
  if(user){
      next();
  }else{
      return res.status(401).send("No such credentials are found");
  }
};

export default basicAuthMiddleware;
