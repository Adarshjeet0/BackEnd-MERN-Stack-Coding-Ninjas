// Please don't change the pre-written code
// Import the necessary modules here
import { userModel } from "../models/users.model.js";

export const userController = async (req, res) => {
  // Write your code here
  try {
    // Call the userModel function to get the data
    let data = await userModel();

    // Render the 'index' view and pass the data
    console.log(data);
    // res.send('Hello')
    res.render('index', { users: data.users });
  } catch (error) {
    // Handle any errors that may occur
    console.error("Error fetching user data:", error);
    res.status(500).send("Internal Server Error");
  }

  
};
