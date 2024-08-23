const fs = require("fs");

const Solution = () => {
  fs.appendFile("note.txt", " new data", (err) => {
    if (err) {
      console.log(err);
    } 
  });

  console.log("data successfully updated")
   
  // const data = fs.readFileSync("note.txt", "utf-8");
  // console.log(data);

  //I changed
  fs.readFile("note.txt","utf-8",(err,data)=>{
    if(err){
      console.log(err);
    }else{
      console.log(data.toString());
    }
  })

}
Solution();
module.exports = Solution;