
// // Callbacks and Promises
// // Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution. This can be useful when you have to wait for something to happen before you can continue.

// // Callbacks
// // A callback is a function that is passed as an argument to another function and is executed after its parent function has completed. Callbacks are used in many ways, such as event listeners, AJAX requests, and timeouts.

// // Example
// // The following code shows how to use a callback function to execute code after a timeout.

// // Asynchronous example
// console.log('I');
// setTimeout(() => {
//   console.log('eat');
// }, 10);
// console.log('apple');








// function sayHello(callback) {
//     setTimeout(() => {
//         console.log('Hello');
//         callback();
//     }, 1000);
// }

// function sayGoodbye() {
//     console.log('Goodbye');
// }

// sayHello(sayGoodbye);




// // Promises
// // Promises are a way to handle asynchronous code in JavaScript. A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// // A promise can be in one of three states: pending, fulfilled, or rejected. A promise is said to be settled if it is either fulfilled or rejected.

// // Example
// // The following code shows how to use a promise to execute code after a timeout.

// // Asynchronous example
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello');
//     }, 1000);
// });

// promise.then((value) => {
//     console.log(value);
// });

// // HW: Promise chaining

