// HW: arrow function
const add0 = (num1, num2) => {
    return num1 + num2;
}
console.log(add0(5, 10));

// arrow function with single statement
const add1 = (num1, num2) => num1 + num2;
console.log(add1(5, 10));
const add2 = num1 => num1 + 5;
console.log(add2(5));
// arrow function with no parameters
const sayHello = () => console.log("Hello");
sayHello();
// Use arrow function to return square of a number
const square = num => num * num;
console.log(square(5));
// use arrow function to iterate through each element of an array
todos.forEach((todo) => console.log(todo.text));
console.log("Using arrow function with single parameter:");
todos.forEach(todo => console.log(todo.text)); // For single parameter, parenthesis can be avoided