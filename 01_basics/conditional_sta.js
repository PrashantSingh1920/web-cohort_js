// Conditional Statements in JavaScript (if, if-else, if-else if-else)
// In simple terms, conditions in JavaScript help you make decisions in your code. They check if a condition is true or false and execute different code accordingly.



// if Statement
// Executes the block only if the condition is true.
// let age = 18;

// if (age >= 18) {
//   console.log("You are eligible to vote!");
// }


// ✅ If the condition (age >= 18) is true, it prints: "You are eligible to vote!"
// ❌ If false, it does nothing.



// if-else Statement
// If the condition is true, the first block runs.
// If false, the else block runs.

let age = 16;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You are too young to vote.");
}




// if-else if-else Statement
// Use when you have multiple conditions to check.


let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// 👉 Output: "Grade: B" (since score is 85)


// Shorter Version: Ternary Operator (? :)
// If you only have one simple condition, you can use ? : (ternary operator) instead of if-else.

let age1 = 20;
let result = age1 >= 18 ? "Adult" : "Minor";
console.log(result); // Output: "Adult"



// if	Runs code if condition is true
// if-else	Runs different code for true and false
// if-else if-else	Handles multiple conditions
// Ternary (? :)	Shorter if-else for simple cases