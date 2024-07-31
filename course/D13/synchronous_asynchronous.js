// Synchronous and Asynchronous are two ways of executing code in JavaScript.
// Synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn’t have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user.
// JavaScript is synchronous by default and is single threaded. This means that code cannot create new threads and run in parallel. However, web APIs such as Web Workers allow you to create new threads using JavaScript.

// Asynchronous code is executed in a different order than it is written. This can be a source of confusion. Callbacks are one way to handle asynchronous code. JavaScript is synchronous and single-threaded. This means that code cannot create new threads and run in parallel. However, web APIs such as Web Workers allow you to create new threads using JavaScript.

// setTimeout() is used to run a function once after a specified number of milliseconds has passed. The setTimeout() method only calls the function once. The ID value returned by setTimeout() is used as the parameter for the clearTimeout() method.
// setInterval() is used to run a function repeatedly, starting after the specified number of milliseconds has passed. The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed. The ID value returned by setInterval() is used as the parameter for the clearInterval() method.

// // Synchronous example
// console.log('I');
// console.log('eat');
// console.log('apple');

// setTimeout
// setInterval
// const operation = () => {
//     console.log('eat');
// }
// setTimeout(operation, 4000)
// console.log('III');

// const operation2 = () => {
//     console.log('apple');
// }
// setInterval(operation2, 2000)














// // Asynchronous example
// console.log('I');
// setTimeout(() => {
//   console.log('eat');
// }, 10);
// console.log('apple');

// We can pass a function as an argument as well









// setInterval(() => {
//     console.log('Hello');
// }, 1000);









// // HW: clearInterval()
// let counter = 0;
// const intervalId = setInterval(() => {
//     console.log('Hello');
//     counter++;
    
//     if (counter === 5) {
//         clearInterval(intervalId);
//     }

// }, 1000);

// What is the issue if we do something like this
// if (counter === 5) {
//     clearInterval(intervalId);
// }

// ??
// clearInterval(intervalId);