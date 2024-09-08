// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
    {
      id: 1,
      name: "coding ninjas",
      email: "ninja@gmail.com",
      image: "https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg",
    },
  ];
  
  export const updateUsers = (user) => {
    const id = user.id;
    const index = users.findIndex(us => us.id == id);
    console.log(index);
    if (index !== -1) {
      users[index] = user; // Only update if the user exists
      return true;
    } else {
      console.error("User not found");
      return false;
    }
  };
  