// Types of Comparisons in JavaScript


// Loose Equality (==) vs. Strict Equality (===)
// == (loose equality) only checks if the values are the same but ignores their type.
// // === (strict equality) checks both the value and the type.

console.log(5 == "5");  // true  (because JavaScript converts "5" to a number)
console.log(5 === "5"); // false (because one is a number and the other is a string)

// ✅ Use === most of the time to avoid unexpected results.

// Not Equal (!= and !==)
// != checks if values are different (ignores type).
// !== checks if both value and type are different.

console.log(5 != "5");  // false (values are the same)
console.log(5 !== "5"); // true  (different types)


// Greater Than & Less Than (>, <, >=, <=)
// Used to compare numbers, strings (alphabetically), or dates.

console.log(10 > 5);   // true
console.log(5 < 10);   // true
console.log(10 >= 10); // true
console.log(5 <= 2);   // false

// Comparing Strings
// JavaScript compares strings alphabetically (dictionary order).

console.log("apple" > "banana"); // false (because "a" comes before "b")
console.log("dog" < "zebra");   // true



// == can give unexpected results due to type conversion.
// Always prefer === for strict comparison.
// JavaScript compares strings letter by letter, not by length.