// let score=33

// console.log(typeof score);
// console.log(typeof(score));  //both are same 
//   output => number 

// let score="33"

// console.log(typeof score);
// console.log(typeof(score));  //both are same 
// output =>string




// let score="33abc"

// console.log(typeof score);
// console.log(typeof(score));  
//  let valueInNumber=Number(score);
//  console.log(typeof valueInNumber);
// //  output => number
// console.log( valueInNumber);/// output is NaN


let score=null     /// if undefined then output is NaN

console.log(typeof score);
let valueInNumber=Number(score);
 console.log(typeof valueInNumber);
 console.log(valueInNumber);/// output is zero



 let isLoggedIn = "Prashant singh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// Boolean Conversion Rules
// 1 => true; 0 => false
// "" (empty string) => false
// "hitesh" (non-empty string) => true


let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string




// *********************** Operations ***********************

let value = 3;
let negValue = -value;
console.log(negValue); // -3

// Basic Arithmetic Operations
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 3); // 8 (Exponentiation: 2^3)
console.log(2 / 3); // 0.666...
console.log(2 % 3); // 2 (Remainder)

// String Concatenation
// String concatenation means joining two or more strings together to form a single string. 
let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(str3); // "hello hitesh"

// Mixing Numbers and Strings
//


console.log("1" + 2); // "12" (String concatenation)
console.log(1 + "2"); // "12" (String concatenation)
console.log("1" + 2 + 2); // "122" (Left to right, treated as string)
console.log(1 + 2 + "2"); // "32" (Addition first, then concatenation)

// Operator Precedence Example
console.log((3 + 4) * 5 % 3); // 2

// Unary Operators
console.log(+true); // 1 (true converts to 1)
console.log(+""); // 0 (empty string converts to 0)

// Assignment Chaining
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); // 4 4 4

// Increment Operator
let gameCounter = 100;
++gameCounter; // Pre-increment
console.log(gameCounter); // 101