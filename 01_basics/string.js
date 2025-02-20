// In JavaScript, a string is simply a piece of text. It is written inside quotes. You can use:

// Single quotes (' ')
// Double quotes (" ")
// Backticks ( ) - Template literals


let name = "prashant";  // Using double quotes
let city = 'kaimur';      // Using single quotes
let message = `Hello, ${name}!`;  // Using backticks (template literals)


// Common String Operations


// Concatenation (Joining strings)


let firstName = "Prashant";
let lastName = "singh";
let fullName = firstName + " " + lastName;
console.log(fullName); // "Prashant singh"


// Getting Length


let text = "Hello World";
console.log(text.length); // 11


let str1 = "JavaScript";
console.log(str1.toUpperCase()); // "JAVASCRIPT"
console.log(str1.toLowerCase()); // "javascript"


let sentence = "I love coding!";
console.log(sentence.slice(2, 6)); // "love"
console.log(sentence.substring(2, 6)); // "love"



// Replacing Text


let phrase = "I like cats.";
console.log(phrase.replace("cats", "dogs")); // "I like dogs."


// Checking if a String Contains Something


let info = "JavaScript is awesome!";
console.log(info.includes("awesome")); // true



// Splitting a String into an Array


let words = "apple,banana,grapes";
console.log(words.split(",")); // ["apple", "banana", "grapes"]







// trim() in JavaScript
// The trim() method removes extra spaces from the beginning and end of a string. It does not change the original string but returns a new one.

let str = "   Hello, World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // "Hello, World!"
