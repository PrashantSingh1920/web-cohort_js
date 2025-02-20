// 1️⃣ push() → Adding an Array Inside Another Array

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
// Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// Instead of merging, push() adds dc_heros as a nested array inside marvel_heros.
// marvel_heros[3] is now an array (["superman", "flash", "batman"]).
// marvel_heros[3][1] → "flash" (accessing the 2nd element of the nested array).


// 2️⃣ concat() → Merging Two Arrays

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
// ✅ concat() creates a new array by merging both arrays, without modifying the original ones.
// ✅ Output:["thor", "Ironman", "spiderman", "superman", "flash", "batman"]



// 3️⃣ Spread Operator (...) → Better Way to Merge

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
// ✅ Same as concat(), but shorter and more flexible.
// ✅ Output:["thor", "Ironman", "spiderman", "superman", "flash", "batman"]


// 4️⃣ flat() → Flattening Nested Arrays

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// ✅ flat(Infinity) removes all nested arrays, turning it into a single-level array.
// ✅ Output:[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// 🚀 Useful when dealing with deeply nested arrays!

// 5️⃣ Checking & Creating Arrays
// 👉 Array.isArray() → Checks if it's an array

console.log(Array.isArray("Hitesh")); // false (because "Hitesh" is a string)
// 👉 Array.from() → Converts into an array

console.log(Array.from("Hitesh"));
// Output: ["H", "i", "t", "e", "s", "h"]
// ✅ Turns a string into an array of characters.


console.log(Array.from({name: "hitesh"}));
// ✅ Output: [] (empty array)
// 👉 Why? Because JavaScript doesn't know how to convert an object into an array directly.

// 6️⃣ Array.of() → Creates an Array from Given Values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// ✅ Array.of() creates an array from multiple values.
// ✅ Output:[100, 200, 300]
// 🚀 Useful when you need to create an array from different variables!