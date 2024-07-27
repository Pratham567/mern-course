// // // Functions






// // functions
// // functions with input
// // function with return value

// function functionName() {
//     console.log("Hello World");
// }
// functionName()

// function printName(firstName, lastName){
//     console.log("Hello " + firstName + " " + lastName);
//     // using backtick notation
//     console.log(`Hello ${firstName} ${lastName}`);
// }
// printName("Pratham", "Gupta");

function addNum(num1, num2){
    return num1 + num2;
}
var sum = addNum(10, 20);

var num1 = 10;
var num2= 20;
var sum2 = addNum(num1, num2);
console.log(sum2);
// 
const sumFunction = function addNum(num1, num2){
    return num1 + num2;
};

const sum3 = sumFunction(10, 20);
console.log(sum3);








// // assign functions to variables

// Q: Write a function to multiply two numbers 
// // and return the result
// Q: assign the above function to a variable 
// // and call it






// Q Write a function to return EVEN or ODD
// using ternary operator
function checkEvenOdd(number1){
    return number1%2 == 0 ? "Even": "Odd";
}







// // HW: arrow function
// const add1 = (num1, num2) => num1 + num2;
// arrow function with no parameters
// HW: Use arrow function to return square of a number