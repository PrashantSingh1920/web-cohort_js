// 1️⃣ Creating Objects
// 👉 Using new Object() or {}

// const tinderUser = new Object(); // Another way (Singleton)
const tinderUser = {}; // Empty object
// ✅ Both create an empty object, but {} is the most commonly used way.

// 👉 Adding Properties to an Object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);
// ✅ Dynamically adding properties to the object.

// 2️⃣ Nested Objects

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};
console.log(regularUser.fullname.userfullname.firstname);
// ✅ Accessing deeply nested properties
// 👉 Use dot notation (.) to access inner objects.

// 3️⃣ Merging Objects

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// Using Object.assign()
const obj3 = Object.assign({}, obj1, obj2, obj4);

// Using Spread Operator
// const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);
// ✅ Both merge objects, but the spread operator {...} is more modern and preferred.

// 4️⃣ Array of Objects

const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "a@gmail.com" },
    { id: 3, email: "b@gmail.com" }
];

console.log(users[1].email); // "a@gmail.com"
// ✅ Accessing object properties inside an array using indexing.

// 5️⃣ Object Methods
// 👉 Object.keys() → Get all keys

console.log(Object.keys(tinderUser)); 
// Output: ["id", "name", "isLoggedIn"]
// 👉 Object.values() → Get all values

console.log(Object.values(tinderUser)); 
// Output: ["123abc", "Sammy", false]
// 👉 Object.entries() → Get key-value pairs

console.log(Object.entries(tinderUser)); 
// Output: [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]
// 👉 hasOwnProperty() → Check if a key exists

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
// ✅ Useful to check if a key exists in an object.

// 6️⃣ Object Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Destructuring
const { courseInstructor: instructor } = course;
console.log(instructor); // "hitesh"
// ✅ Extracts values directly into variables
// ✅ courseInstructor is renamed as instructor

// 7️⃣ JSON Format
// 👉 JSON Object
// 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// ✅ JSON (JavaScript Object Notation) is used for data exchange.

// 👉 JSON Array

[
    {},
    {},
    {}
]
// ✅ JSON arrays hold multiple objects.

