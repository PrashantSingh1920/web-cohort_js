const myArr = [0, 1, 2, 3, 4, 5]; // A list of numbers
const myHeors = ["shaktiman", "naagraj"]; // A list of superheroes

const myArr2 = new Array(1, 2, 3, 4); // Another way to create an array
// ✅ myArr stores [0,1,2,3,4,5]
// ✅ myHeors stores ["shaktiman", "naagraj"]
// ✅ myArr2 stores [1,2,3,4]

// Array Methods in Your Code
// 1️⃣ .push() → Adds elements at the end

myArr.push(6); // Adds 6 at the end
myArr.push(7); // Adds 7 at the end
// ✅ myArr becomes [0, 1, 2, 3, 4, 5, 6, 7]

// 2️⃣ .pop() → Removes the last element

myArr.pop(); // Removes the last element (7)
// ✅ myArr becomes [0, 1, 2, 3, 4, 5, 6]

// 3️⃣ .unshift() → Adds elements at the start

myArr.unshift(9); // Adds 9 at the beginning
// ✅ myArr becomes [9, 0, 1, 2, 3, 4, 5]

// 4️⃣ .shift() → Removes the first element

myArr.shift(); // Removes 9 from the beginning
// ✅ myArr becomes [0, 1, 2, 3, 4, 5]

// 5️⃣ .includes() → Checks if a value is in the array

console.log(myArr.includes(9)); // false (9 is not in the array)


// 6️⃣ .indexOf() → Finds the position of a value

console.log(myArr.indexOf(3)); // 3 (3 is at index 3)


// 7️⃣ .join() → Converts an array to a string

const newArr = myArr.join();
console.log(newArr); 
// ✅ newArr is "0,1,2,3,4,5" (a string, not an array)

// 📌 slice() vs splice() (The Main Part)


// 🔹 slice(start, end) → Does NOT change the original array
// Think of slice() as making a copy of part of an array.
// It extracts elements between start and end (end is not included).
// Original array remains the same.

console.log("A ", myArr); // A  [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3);
console.log(myn1); // [1, 2] (Elements from index 1 to 2)
console.log("B ", myArr); // B  [0, 1, 2, 3, 4, 5] (No change)
// ✅ myn1 gets [1, 2]
// ✅ myArr is unchanged [0, 1, 2, 3, 4, 5]

// 🔹 splice(start, count) → Changes the original array
// Think of splice() as cutting out part of an array.
// It removes count number of elements starting from start.
// Original array gets modified.

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); // C  [0, 4, 5] (Original array modified)
console.log(myn2); // [1, 2, 3] (Removed elements)
// ✅ myn2 gets [1, 2, 3] (Removed from the array)
// ✅ myArr is now [0, 4, 5] (Modified!)

