const accountId= 1234
let accountMail="prashant13@gmail.com"
var accountPassword="siei12"
accountCity="jaipur"
let accountState;  // here it show undefined

// accountId= 2 
/// variables is  container that store data in javascript
/* 
     In JavaScript, variables can be declared in **four ways**:

        1️⃣ Using `var`
        2️⃣ Using `const`
        3️⃣ Using `let`
        4️⃣ Automatically (Without `var`, `let`, or `const`)

       Use `let`** for values that will change.
       Use `const`** for values that should **never change**.
*/

console.log(accountId);

// prefer not to use var because of issue in block scope and fuctional scope
accountEmail="hdf@com"
accountPassword="jfksdf"
accountCity="mohali"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
/*
   if you are using declare more value at a time then use consle.table([])


 */

