// JavaScript is a dynamically typed language. 
//  JavaScript does not require you to specify the type of a variable when you declare it. The type of a variable is decided automatically when the code runs (at runtime).


// Primitive

//  7 types:string,number,bool,null,undefined,symbol,bigint


const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);








// non primitive(refernece)
//  array,object,function


const heros=["shakti","doga","spider"]  ////array
let myOb={
    name:"Prashant",
    age:23,


}////// object


const myfunction = function(){
    console.log("hello world");
    
}///// function



// Type	typeof return value	Object wrapper
// Null      	"object"	    N/A
// Undefined   	"undefined" 	N/A
// Boolean	    "boolean"	    Boolean
// Number	    "number"	    Number
// BigInt	    "bigint"	    BigInt
// String	    "string"	    String
// Symbol	    "symbol"	    Symbol