// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
    { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
  ];
  
  export const registerUser = (user) => {
    // Write your code here
    user.id = users.length + 1;
    console.log(user);
    users.push(user);
  };
  
  export const authenticateUser = (reqUser) => {
    // Write your code here
    const result = users.find(u=> u.email == reqUser.email && u.password == reqUser.password);
    console.log(result)
    return result;
  };
  