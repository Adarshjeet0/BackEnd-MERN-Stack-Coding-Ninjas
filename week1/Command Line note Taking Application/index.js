// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs');

const Solution = () => {
  // Write your code here
  fs.writeFileSync("notes.txt","The world has enough coders");
  const buffer1 = fs.readFileSync("notes.txt", {encoding : "utf8"});
  console.log(buffer1.toString());
  fs.appendFileSync("notes.txt","BE A CODING NINJA!");
  const buffer2 = fs.readFileSync("notes.txt", {encoding : "utf8"});
  console.log(buffer2.toString());
};
Solution();
module.exports = Solution;
