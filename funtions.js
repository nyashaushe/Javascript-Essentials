// syntax
function functionName() {
    code
 }
 
 /*
 This type of function declaration in JavaScript is called a function statement. A function statement starts with the function keyword followed by the function name. Function names need to follow the same rules as variable names, and should also be meaningful. After the function name, there are parentheses that can optionally have function parameters, which we’ll discuss in a while. 
 After the parentheses comes the function body, which is made from any number of statements (a code block).
 */


//let temperatures;
//let sum;
//let meanTemp;
function getMeanTemp() {
     sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     meanTemp = sum / temperatures.length;    
}

// full example with working code 

let temperatures;
let sum;
let meanTemp;
function getMeanTemp() {
     sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     meanTemp = sum / temperatures.length; 
}
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332



