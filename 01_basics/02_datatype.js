 /*
 1️⃣ What are data types in JavaScript?
                    In JavaScript, data types define the type of values a variable can hold. 
                    JavaScript is dynamically typed, meaning variables do not have a fixed type;
                    their type can change during execution.


            JavaScript has two main types of data:
                     1️⃣ Primitive Data Types (Stored by value)
                     2️⃣ Non-Primitive Data Types (Stored by reference)





 number=> 2 to power 53
 string=>""
 boolean=>true/flase
 null=>standalone value
 undefined=>
*/ 
let name = "Prashant";   // String

let age = 25;        // Number

let isStudent = true;  // Boolean

let salary;           // Undefined

let emptyValue = null;   // Null

let bigNumber = BigInt(9999999999999999);    // BigInt

let id = Symbol("uniqueId");      // Symbol 


// console.log(typeof name); // Output: string
// console.log(typeof age); // Output: number
// console.log(typeof isStudent); // Output: boolean
// console.log(typeof salary); // Output: undefined
// console.log(typeof emptyValue); // Output: object (this is a JavaScript bug!)
// console.log(typeof bigNumber); // Output: bigint
// console.log(typeof id); // Output: symbol


let person = { name: "Alice", age: 30 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
function sayHello() { console.log("Hello!"); } // Function

// console.log(typeof person);  // Output: object
// console.log(typeof numbers); // Output: object (Arrays are objects)
// console.log(typeof sayHello); // Output: function


/* 
                🎯 Summary:
                ✅ Primitive Data Types: String, Number, Boolean, Undefined, Null, BigInt, Symbol.
                ✅ Non-Primitive Data Types: Object, Array, Function.
                ✅ typeof operator is used to check the data type of a variable.
                ✅ Primitive data types store values directly, while non-primitive types store references.

*/


