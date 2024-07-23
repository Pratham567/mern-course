


console.log("This is a console log from main.js file");
console.error("This is an error from main.js file");
console.warn("This is a warning from main.js file");
console.info("This is an info from main.js file");
console.debug("This is a debug from main.js file");
console.trace("This is a trace from main.js file");

// comment
/* multi
line
comment */

// // var, let, const
var fname = "Pratham";
console.log(fname);
fname = "Prashant";
console.log(fname);

// // Init var
var greeting;
console.log(greeting); // undefined
greeting = "Hello";
console.log(greeting);


// // var is globally scoped, so we should not avoid using this
// // let and const are block scoped

// // // let
let lname = "Gupta";
console.log(lname);
// // data type can be changed for let
// lname = 5;
// console.log(lname);

// // const
const cityOfStay = "Delhi";
console.log(cityOfStay);
// const must be assigned a value during declaration
// const state; // error
// const cannot be reassigned
// cityOfStay = "Mumbai"; // error, 
// Due to error above, the following code will not run
// console.log(cityOfStay);
// console.log(lname);

// // // Data types
// // Primitive data types
// // String, Number, Boolean, null, undefined

// String
let name = "Pratham Gupta"; // Strings can be single or double quotes
console.log(typeof name);

// // Number
const age = 21;
// console.log(typeof age);
// const rating = 4.5; // JS does not differentiate between int and decimal (float)
// console.log(typeof rating);

// Boolean
// const isCool = true;
// console.log(typeof isCool);

// Null
const x = null;
console.log(typeof x); // basically nothing, but JS says it is an object

// Undefined
let y;
console.log(typeof y); // undefined
let z;
console.log(typeof z); // undefined

// Concatenation
console.log("My name is " + name + " and I am " + age + " years old");
var newString = "My name is " + name + " and I am " + age + " years old";
console.log(newString);
console.log("My name is ${name} and I am ${age} years old");

// Template string
console.log(`My name is ${name} and I am ${age} years old`);

// or
const hello = `My name is ${name} and I am ${age} years old`;
console.log(hello);
hello = ""
