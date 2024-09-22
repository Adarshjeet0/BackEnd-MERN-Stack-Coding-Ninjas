  
// Import the necessary modules here
import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  // 1. Fetch the token from the cookies
  const token = req.cookies.jwtToken;

  // 2. If no token is found in the cookie, return an error message
  if (!token) {
    return res.status(401).send({ success: 'false', message: "Unauthorized access" });
  }

  // 3. Check if the token is valid
  try {
    const payload = jwt.verify(token, 'qwertyuiop'); // Verify the token using the secret
    req.user = payload; // Store the decoded payload in req.user for future use
  } catch (error) {
    // 4. If verification fails, return an error message
    return res.status(401).send({ success: 'false', message: "Invalid token" });
  }

  // 5. If the token is valid, call next()
  next();
};

export default jwtAuth;
