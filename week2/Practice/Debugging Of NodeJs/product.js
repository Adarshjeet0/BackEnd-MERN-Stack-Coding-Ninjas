//Debugging of nodeJs using Terminal
function calculateTotal(products) {
    let total = 0
    products.forEach((product) => {
      total += product.quantity * product.price
    })
    return total
  }
  
  const productsList = [
    { name: 'Shoes', price: 50, quantity: 2 },
    { name: 'Hat', price: 25, quantity: 1 },
    { name: 'Gloves', price: 30, quantity: 2 },
  ]
  // expected result = 100+25+60=185
  const grandTotal = calculateTotal(productsList)
  console.log('Grand Total:', grandTotal)


  //To debug this code using NodeJs builtin debugger follow the given steps

  //Step 1. run this command: node inspect product.js
  //Step 2. Add breakpoint if want to stop execution. I want to add at line number 4
  //        so run this command: setBreakpoint('product.js',4)
  //Step3. I want to watch something from file so you can also watch using watch() method.: watch('product') product of for each loop at line number 3 and then 
  //        enter : cont 
   
  