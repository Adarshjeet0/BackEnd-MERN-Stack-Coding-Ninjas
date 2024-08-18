// function add(a,b) {
//     console.log(`Sum: ${a+b}`);
// }
// function sub(a,b){
//     console.log(`Subtraction: ${a-b}`);
// }
// //How to export functions?
// module.exports = {
//     sum: add,
//     sub: sub 
// };


module.exports.sum = (a,b)=>{
    console.log(`Sum: ${a+b}`);
}