


// console.log("This is a console log from main.js file");
// console.error("This is an error from main.js file");
// console.warn("This is a warning from main.js file");
// console.info("This is an info from main.js file");
// console.debug("This is a debug from main.js file");
// console.trace("This is a trace from main.js file");

// comment
/* multi
line
comment */

// // var, let, const
// var fname = "Pratham";
// console.log(fname);
// fname = "Prashant";
// console.log(fname);

// // Init var
// var greeting;
// console.log(greeting); // undefined
// greeting = "Hello";
// console.log(greeting);


// // var is globally scoped, so we should not avoid using this
// // let and const are block scoped

// // // let
// let lname = "Gupta";
// console.log(lname);
// // data type can be changed for let
// lname = 5;
// console.log(lname);

// // const
// const cityOfStay = "Delhi";
// console.log(cityOfStay);
// const must be assigned a value during declaration
// const state; // error
// const cannot be reassigned
// cityOfStay = "Mumbai"; // error, 
// // Due to error above, the following code will not run
// console.log(cityOfStay);
// console.log(lname);

// // // Data types
// // Primitive data types
// // String, Number, Boolean, null, undefined

// String
// let name = "Pratham Gupta"; // Strings can be single or double quotes
// console.log(typeof name);

// // Number
// const age = 21;
// console.log(typeof age);
// const rating = 4.5; // JS does not differentiate between int and decimal (float)
// console.log(typeof rating);

// Boolean
// const isCool = true;
// console.log(typeof isCool);

// Null
// const x = null;
// console.log(typeof x); // basically nothing, but JS says it is an object

// Undefined
// let y;
// console.log(typeof y); // undefined
// let z;
// console.log(typeof z); // undefined

// Concatenation
// console.log("My name is " + name + " and I am " + age + " years old");
// var newString = "My name is " + name + " and I am " + age + " years old";
// console.log(newString);
// console.log("My name is ${name} and I am ${age} years old");

// // Template string
// console.log(`My name is ${name} and I am ${age} years old`);

// // or
// const hello = `My name is ${name} and I am ${age} years old`;
// console.log(hello);
// hello = ""

// // // String properties and methods
const fName = "Hello123 World! welcome to the club";
console.log(typeof fName);
// console.log(fName.length);
// The lenth of the string s is: 11
// console.log(fName.toUpperCase());
// console.log(fName.toLowerCase());
// console.log(fName.substring(0, 9)); // 0 to 4
// console.log(fName.substring(6)); // 6 to end
// console.log(fName.split("1234")); // split by character
// console.log(typeof fName.split("123"))
// const t = "technology, computers, it, code";
// console.log(t.split(", "));


// // Reference data types
// // Arrays, Object literals, Functions, Dates

// // Array
// // Arrays are variables that hold multiple values
const hobbies = ["coding", "reading", "writing"];
console.log(typeof hobbies); // 
// hobbies = ["new Element"]; 
// object
// access array elements
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
console.log(hobbies[3]); // undefined
// // add element to array
hobbies[3] = "singing";
console.log(hobbies[3]);
// // add element to array using push
hobbies.push("dancing");
console.log(hobbies);
// // add element to array using unshift
hobbies.unshift("painting");
console.log(hobbies);
// // remove element from end of array
hobbies.pop();
console.log(hobbies);
// // remove element from start of array
hobbies.shift();
console.log(hobbies);
// // remove elements from array using splice
hobbies.splice(1, 1); // remove 1 element from index 1
console.log(hobbies);
// // reverse array
hobbies.reverse();
console.log(hobbies);
// // concatenate arrays
const hobbies2 = ["swimming", "running"];
const allHobbies = hobbies.concat(hobbies2);
console.log(allHobbies);
console.log(allHobbies.sort());
// // sort array
let arrayNum = [10, 2, 3, 4, 5, 7, 4];
console.log(arrayNum.sort(
    function (num1, num2){ 
        return num1-num2;
} ));

// write a sort comp method, 
// where the number which has 
// square value lower comes first
let arrayNum1 = [1, 2, 1, -1, -2, 3, 0.1, 0.2];
console.log(arrayNum1.sort(function(num1, num2){
    return num1*num1 - num2*num2;
}));

// // sort array of numbers
// const numbers = [3, 1, 5, 2, 4];
// console.log(numbers.sort());
// // sort array of numbers using compare function
// console.log(numbers.sort(function(a, b) {return a - b;}));
// // sort array of numbers in descending order using compare function
// console.log(numbers.sort(function(a, b) {return b - a;}));

// const new_numbers = new Array(1, 2, 3, 4, 5);

// // In JS, arrays can have multiple data types
// const mixed = [22, "Hello", true, undefined, null, {a: 1, b: 2}, new Date()];
// console.log(mixed);

// console.log(Array.isArray(mixed)); // check if array
// console.log(mixed.indexOf(22)); // find index of element
// console.log(mixed.indexOf(100)); // -1 if not found

// // Object literal -> key-value pairs
// const address = {
//     city: "Delhi",
//     state: "Delhi"
// }

// const person = {
//     firstName: "Pratham",
//     lastName: "Gupta",
//     age: 21,
//     hobbies: ["coding", "reading", "writing"],
//     // embedded object
//     address: {
//         city: "Delhi",
//         state: "Delhi"
//     }
// }
// console.log(person);
// console.log(person.firstName);
// console.log(person.hobbies[0]);
// console.log(person.address.city);

// // Logging multiple values
// console.log(person.firstName, person.lastName, person.age);

// // Destructuring, extracting values from objects
// const { firstName, lastName } = person;
// console.log(firstName, lastName);
// const { address: { city } } = person;
// console.log(city);
// const { music } = person; // not present in the object
// console.log(music); // undefined

// // Add properties
// person.email = "go4pratham0897@gmail.com";

// // Array of objects
// const todos = [
//     {
//         id: 1,
//         text: "Coding",
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: "Reading",
//         isCompleted: false
//     },
//     {
//         id: 3,
//         text: "Writing",
//         isCompleted: true
//     }
// ];
// console.log(todos);

// // JSON -> JavaScript Object Notation
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
// console.log(typeof todoJSON);

// // // Loops

// // for
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // while
// let i = 0;
// while(i < 10) {
//     console.log(`While loop number: ${i}`);
//     i++;
// }

// // for loop for arrays
// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// // for-of loop
// for(let todo of todos) {
//     console.log(todo.text);
// }


// // // High order array methods
// // forEach, map, filter
// /*
// forEach is used for executing a function on each item in an array without creating a new array.
// map is used for creating a new array by transforming each element in an original array.
// filter is used for creating a new array that contains only elements that satisfy a specified condition.
// */
// todos.forEach(function(todo) {
//     console.log(todo);
// });
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText);
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);
// const todoCompletedText = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// });
// console.log(todoCompletedText);

// // // Conditionals
// // if
// const x1 = 10;
// const x2 = '10';
// if(x1 == 10) {
//     console.log("x1 is 10");
// }
// if(x1 === 10) {
//     console.log("x1 is equal to '10'");
// }
// if(x1 == x2) {
//     console.log("x1 is equal to x2");
// }
// if(x1 === x2) {
//     console.log("x1 === x2");
// }
// if(x1 === 10 && x2 === '10') {
//     console.log("x1 is 10 and x2 is '20'");
// }
// if(x1 === 10 || x2 === '20') {
//     console.log("x1 is 10 or x2 is '20'");
// }
// if(x1 > 5) {
//     console.log("x1 is greater than 5");
// }

// // if-else
// const num1 = 10;
// const num2 = 20;
// if(num1 > num2) {
//     console.log(`${num1} is greater than ${num2}`);
// }
// else {
//     console.log(`${num1} is less than ${num2}`);
// }

// // else-if
// const num3 = 30;
// if(num3 > 30) {
//     console.log(`${num3} is greater than 30`);
// }
// else if(num3 < 30) {
//     console.log(`${num3} is less than 30`);
// }
// else {
//     console.log(`${num3} is equal to 30`);
// }

// // check if a number is even or odd using if-else
// const num4 = 31;
// if(num4 % 2 === 0) {
//     console.log(`${num4} is even`);
// }
// else {
//     console.log(`${num4} is odd`);
// }

// // use if-else to check if a number is positive, negative or zero
// const number = 0;
// if(number > 0) {
//     console.log(`${number} is positive`);
// }
// else if(number < 0) {
//     console.log(`${number} is negative`);
// }
// else {
//     console.log(`${number} is zero`);
// }

// // clubbing multiple conditions
// // use if-else to check if a given year is a leap year or not
// // Definition of a leap year
// // A year is a leap year if it is divisible by 4 and not divisible by 100
// // A year is a leap year if it is divisible by 400
// const year = 2020;
// if(year % 4 === 0 ){
//     if(year % 100 !== 0) {
//         console.log(`${year} is a leap year`);
//     }
//     else { // year is divisible by 100
//         if(year % 400 === 0) {
//             console.log(`${year} is a leap year`);
//         }
//         else {
//             console.log(`${year} is not a leap year`);
//         }
//     }
// }

// // if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
// //     console.log(`${year} is a leap year`);
// // }

// // ternary operator
// const x3 = 10;
// let isEvenNumber;
// if(x3 % 2 === 0) {
//     isEvenNumber = true;
//     console.log(`${x3} is even`);
// }
// else {
//     console.log(`${x3} is odd`);
//     isEvenNumber = false;
// }
// isEvenNumber = x3 % 2 === 0 ? true : false;

// // switch
// const color = "red";
// switch(color) {
//     case "red":
//         console.log("Color is red");
//         break;
//     case "blue":
//         console.log("Color is blue");
//         break;
//     default:
//         console.log("Color is not red or blue");
//         break;
// }

// // // Functions
// function greet() {
//     console.log("Hello");
// }
// greet();

// function sumOfNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// sumOfNumbers(10, 20);
// sumOfNumbers(5, 10);

// function getSumOfNUmbers(number1, number2){
//     return number1 + number2;
// }

// let sumValue = getSumOfNUmbers(10, 20);
// console.log(sumValue);

// // function with parameters
// function greet1(name) {
//     console.log(`Hello ${name}`);
// }
// greet1("Pratham");
// // default parameter
// function greet2(name = "Pratham") {
//     console.log(`Hello ${name}`);
// }
// greet2();
// greet2("Prashant");

// // function with return value
// function add(num1, num2) {
//     return num1 + num2;
// }
// let sum = add(10, 20);
// console.log(sum);
// // console.log(add(5, 10));

// // HW: arrow function
// const add0 = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(add0(5, 10));
// // arrow function with single statement
// const add1 = (num1, num2) => num1 + num2;
// console.log(add1(5, 10));
// const add2 = num1 => num1 + 5;
// console.log(add2(5));
// // arrow function with no parameters
// const sayHello = () => console.log("Hello");
// sayHello();
// // Use arrow function to return square of a number
// const square = num => num * num;
// console.log(square(5));
// // use arrow function to iterate through each element of an array
// todos.forEach((todo) => console.log(todo.text));
// console.log("Using arrow function with single parameter:");
// todos.forEach(todo => console.log(todo.text)); // For single parameter, parenthesis can be avoided


// Functions inside objects
// const person = {
//     firstName: "Pratham",
//     lastName: "Gupta",
//     age: 21,
//     hobbies: ["coding", "reading", "writing"],
//     // embedded object
//     address: {
//         city: "Delhi",
//         state: "Delhi"
//     },
//     // function inside object
//     getBirthYear: function() {
//         return 2021 - this.age;
//     }
// }
// // methods and variables inside objects are accessed using dot notation
// // properties are accessed using dot notation or square brackets
// console.log(person.firstName);
// console.log(person["lastName"]);
// // functions are accessed using dot notation and parentheses
// console.log(person.getBirthYear());


// // Date object
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// // get month
// console.log(today.getMonth()); // 0 based index
// // get date
// console.log(today.getDate()); // write with backticks and add some string content in logs..
// // get day
// console.log(today.getDay());
// // get year
// console.log(today.getFullYear());
// // get hours
// console.log(today.getHours());
// // get minutes
// console.log(today.getMinutes());
// // get seconds
// console.log(today.getSeconds());
// // get milliseconds
// console.log(today.getMilliseconds());
// // get time
// console.log(today.getTime());





// Why can we change the values of an object variables.