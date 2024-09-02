// Please don't change the pre-written code
// Import the necessary modules here

export const userModel = async () => {
    // Write your code here
    const data =  await fetchAPIdata();
    return data;
    // let res = [];
    // data.forEach(dt=>{
    //   const data = {
    //     id: dt.id,
    //     username = dt.username,
    //     firstName: dt.firstName,
    //     gender:dt.gender
    //     email: dt.email,
    //     phone: dt.phone,
    //     prof:dt.profile
    //     img
  
      // };
    // })
    // return fetchAPIdata();
    
  };
  
  async function fetchAPIdata() {
    const  response = await fetch('https://dummyjson.com/users');
    const data1 = await response.json();
    return data1;
  
  }
  