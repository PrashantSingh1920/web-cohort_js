// 1️⃣ Singleton Object


// A singleton object is created using:


const obj = Object.create({});
// 👉 This means only one instance of the object exists.

// 2️⃣ Object Literals

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
// 👉 This is the most common way to create objects.

// 3️⃣ Using Symbols as Object Keys

const mySym = Symbol("key1");

// const JsUser = {
//     [mySym]: "mykey1",  // Symbol as a key
// };
// 👉 Using [mySym] ensures that the key is a Symbol, not a string.
// ✅ Accessing Symbol Keys:console.log(JsUser[mySym]); // "mykey1"


// Note: You can't access it using JsUser.mySym because it's not a string key.

// 4️⃣ Accessing Object Properties

console.log(JsUser.email);        // "hitesh@google.com"
console.log(JsUser["email"]);     // "hitesh@google.com"
console.log(JsUser["full name"]); // "Hitesh Choudhary"
// 👉 Use dot notation (.) for normal keys.
// 👉 Use bracket notation ([]) for keys with spaces ("full name").

// 5️⃣ Modifying Object Properties

JsUser.email = "hitesh@chatgpt.com";
console.log(JsUser.email); // "hitesh@chatgpt.com"
// ✅ Object properties can be updated.

// 6️⃣ Freezing an Object (Object.freeze())

Object.freeze(JsUser);
JsUser.email = "hitesh@microsoft.com"; // ❌ Won't change (frozen)
console.log(JsUser.email); // "hitesh@chatgpt.com"
// 👉 Object.freeze() prevents modifications to the object.

// 7️⃣ Adding Functions Inside an Object

JsUser.greeting = function(){
    console.log("Hello JS user");
};

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};
// ✅ Using this keyword → refers to the current object (JsUser).

// Calling Methods

console.log(JsUser.greeting()); 
// Output: Hello JS user

console.log(JsUser.greetingTwo()); 
// Output: Hello JS user, Hitesh