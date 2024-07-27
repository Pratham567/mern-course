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

// // Undefined
// let y;
// console.log(typeof y); // undefined
// let z;
// console.log(typeof z); // undefined

// // Concatenation
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
// const s = "Hello World";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5)); // 0 to 4
// console.log(s.substring(6)); // 6 to end
// console.log(s.split("")); // split by character
// const t = "technology, computers, it, code";
// console.log(t.split(", "));


// // Reference data types
// // Arrays, Object literals, Functions, Dates

// // Array
// // Arrays are variables that hold multiple values
// const hobbies = ["coding", "reading", "writing"];
// console.log(typeof hobbies); // object
// // access array elements
// console.log(hobbies[0]);
// console.log(hobbies[1]);
// console.log(hobbies[2]);
// // add element to array
// hobbies[3] = "singing";
// console.log(hobbies);
// // add element to array using push
// hobbies.push("dancing");
// console.log(hobbies);
// // add element to array using unshift
// hobbies.unshift("painting");
// console.log(hobbies);
// // remove element from end of array
// hobbies.pop();
// console.log(hobbies);
// // remove element from start of array
// hobbies.shift();
// console.log(hobbies);
// // remove elements from array using splice
// hobbies.splice(1, 1); // remove 1 element from index 1
// console.log(hobbies);
// // reverse array
// hobbies.reverse();
// console.log(hobbies);
// // concatenate arrays
// const hobbies2 = ["swimming", "running"];
// const allHobbies = hobbies.concat(hobbies2);
// console.log(allHobbies);
// // sort array
// console.log(allHobbies.sort());
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

let objectVar = { "key1": "value1" };
console.log(typeof objectVar);

let personInfo = {
    "firstName": "Pratham",
    "lastName": "Gupta",
    "age": 21,
    "hobbies": ["coding", "reading", "writing"],
    "address": {
        "city": "Delhi",
        "state": "Delhi"
    }
}

let personInfo_1 = {
    "firstName": "Rohan",
    "lastName": "Gupta",
    "age": 21
}

// let newArray = [personInfo, personInfo_1];
// console.log(newArray);

// console.log(personInfo);
// console.log(personInfo["firstName"]);
// var keyVar = "firstName";
// console.log(personInfo[keyVar]);
// console.log(personInfo["hobbies"]);

// var hobbiesArray = personInfo["hobbies"];
// console.log(hobbiesArray);
// hobbiesArray.push("singing");
// personInfo["hobbies"].push("dancing");
// console.log(personInfo["hobbies"]);
// personInfo["phone"] = "1234567890";
// console.log(personInfo);

// personInfo.phone;
// console.log(personInfo.address.city);

// personInfo.lastName = "Gupta_1";
// console.log(personInfo);

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
// console.log(personInfo.firstName, personInfo.lastName, personInfo.age);

// // Destructuring, extracting values from objects
// const { firstName, lastName, Age } = personInfo;
// console.log(firstName, lastName, Age);



/*
let personInfo = {
    "firstName": "Pratham",
    "lastName": "Gupta",
    "age": 21,
    "hobbies": ["coding", "reading", "writing"],
    "address": {
        "city": "Delhi",
        "state": "Delhi"
    }
}
    */

// const {city} = personInfo;
// console.log(city);
// const { address: { city } } = personInfo;
// console.log(city);

// // Add properties
// person.email = "go4pratham0897@gmail.com";

// let array_1 = [{ "key1": "value1" }, { "key2": "value2" }];
// Create an array which has an object, which further has an array
// let array_2 = [{ "key": [1, 2, 3] }];
// array_3
// obj key: key_1
// obj_val: Array
// Array element: keep it obj_2
// obj_2 : key = key_2, value: val_2

// let array_3 = [{ "key": [{ "key_2": "val_2" }] }];

// // Array of objects
const todos = [
    {
        id: 1,
        text: "Coding",
        isCompleted: true
    },
    {
        id: 2,
        text: "Reading",
        isCompleted: false
    },
    {
        id: 3,
        text: "Writing",
        isCompleted: true
    }
];

// console.log(todos);
// console.log(todos[1]);
// console.log(todos[0]["id"]);

// console.log(typeof todos[1]);

// // JSON -> JavaScript Object Notation
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
// console.log(typeof todoJSON);

// // // Loops
// // for
let i = 5;
function increment(num){
    return num+1;
}
const arr = [1, 2, 3, 4, 5];

for(i=0; i < arr.length; i=increment(i)) {
    console.log(arr[i]);
    i++;
}
// i = 0; i < 5 -> true => go inside the loop; i = 0+1=1
// i = 1; i < 5 -> true => go inside the loop; i = 1+1=2
// i = 2; i < 5 -> true => go inside the loop; i = 2+1=3
// i = 3; i < 5 -> true => go inside the loop; i = 3+1=4
// i = 4; i < 5 -> true => go inside the loop; i = 4+1=5
// i = 5; i < 5 -> false => exit the loop

// // while
i = 0;
while(i < 5) {
    console.log(`While loop number: ${i}`);
    i++;
}
// i=0 -> 0 < 5 -> true => go inside the loop; i = i+1 = 1;
// i=1 -> 1 < 5 -> true => go inside the loop; i = i+1 = 2;
// i=2 -> 2 < 5 -> true => go inside the loop; i = i+1 = 3;
// i=3 -> 3 < 5 -> true => go inside the loop; i = i+1 = 4;
// i=4 -> 4 < 5 -> true => go inside the loop; i = i+1 = 5;
// i=5 -> 5 < 5 -> false => exit the loop

// // for loop for arrays
// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// for-of loop
// for(let todo_elem of todos) {
//     console.log(todo_elem.text);
// }
// console.log(todo_elem);

// // // High order array methods
// // forEach, map, filter
// console.log(todos);

// todos.forEach(function(todo) {
//     // console.log(todo.text);
//     console.log(`Task: ${todo.text}, Status: ${todo.isCompleted}`);
// });
// Write the above method using arrow notation
// todos.forEach((todo) => console.log(`Task: ${todo.text}, Status: ${todo.isCompleted}`));

/*
const todos = [
    {
        id: 1,
        text: "Coding",
        isCompleted: true
    },
    {
        id: 2,
        text: "Reading",
        isCompleted: false
    },
    {
        id: 3,
        text: "Writing",
        isCompleted: true
    }
];
*/

const todoText = todos.map(function(todo) {
    return todo.text;
});

/*let personInfo = {
    "firstName": "Pratham",
    "lastName": "Gupta",
    "age": 21,
    "hobbies": ["coding", "reading", "writing"],
    "address": {
        "city": "Delhi",
        "state": "Delhi"
    }
}
    function(personInfo){
        return personInfo.firstName
    }

let personInfo_1 = {
    "firstName": "Rohan",
    "lastName": "Gupta",
    "age": 21
}
    */

   let personArray = [personInfo, personInfo_1];
   let firstNameArray = [];

function extractFirstName(personArray){
    return personArray.firstName;
}

for(let i = 0; i < personArray.length; i++){
    let name = extractFirstName(personArray[i]);
    firstNameArray.push(name);
}
console.log(firstNameArray);

// same thing using map
const firstNameArray_1 = personArray.map(extractFirstName);

// forEach -> for every welement of array, perform an operation
// map -> for every element of array, do some oper return a new array

// const firstName = personArray.map(function(personInfo){
//     return personInfo.firstName
// }

// )
// const address = newArray.map(function(elem){
//     return elem.address;
// })

// console.log(address);
// const cityName = newArray.map(function(elem){
//     return elem.address.city;
// })
// console.log(cityName);

// let z;
// console.log(z.something);
// console.log(typeof todoText);
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
// if

// const x1 = "10";
// const x2 = '10';
// if(10 == 10 ) {
//     console.log("x1 is 10");
// }

// if(x1 === 10) {
//     console.log("x1 is equal to '10'");
// }
// // if(x1 == x2) {
// //     console.log("x1 is equal to x2");
// // }
// // if(x1 === x2) {
// //     console.log("x1 === x2");
// // }

// // check if a number is equal to x1, and the number is even
// if(x1 == 10 && 10 % 2 == 1) { // AND Operator
//     console.log("x1 is 10 and it is even");
// }

// if(x1 == 11 || 10 % 2 == 1) { // OR operator
//     console.log("x1 is 10 or it is odd");
// } else {
//     console.log("x1 is not 10 and it is not odd");
// }


// // clubbing multiple conditions
// // use if-else to check if a given year is a leap year or not
// // Definition of a leap year
// // An year is a leap year if it is divisible by 4 and not divisible by 100
// // A year is a leap year if it is divisible by 400
const year = 2020;


// if(year % 4== 0){
//     if(year %100 != 0 ){
//         console.log(`${year} is a leap year`);
//     }
//     else{
//         // year is divisible by 100
//         if(year % 400 == 0){
//             console.log(`${year} is a leap year`);
//         }
//         else{
//             console.log(`${year} is not a leap year`);
//         }
//     }
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

