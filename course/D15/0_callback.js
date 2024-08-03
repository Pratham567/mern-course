// function f1(callback) {
//     console.log('I am inside function f1');
//     callback();
// }
// function sayHello() {
//     console.log('Hello');
// }
// function sayGoodbye() {
//     console.log('Goodbye');
// }

// // f1(sayHello);
// f1(() => console.log('Hello'));
// f1(sayGoodbye);
// f1(() => console.log('Goodbye'));

// Q: write the above two functions as anonymous functions and arrow functions?























// Q: Write a function that takes a callback function as an argument and calls it?
// function f2(name, callback) {
//     console.log('I am inside function f2');
//     callback(name);
// }
// function greet(name) {
//     console.log(`Hello ${name}`);
// }
// function sayGoodbye(name) {
//     console.log(`Goodbye ${name}`);
// }
// // f2('Alice', greet);
// f2("Alice", (name) => console.log(`Hello ${name}`));
// // f2('Bob', sayGoodbye);
// f2("Bob", (name) => console.log(`Goodbye ${name}`));

// Q: write the above two functions as anonymous functions and arrow functions?




















// Callback functions which have data as well as error
function f3(name, callback) {
    console.log('I am inside function f3');
    // check if name is a string
    if (typeof name === 'string') {
        const data = `Hello ${name}`;
        callback(null, data);
    } else {
        const error = new Error('Error: Name is a number');
        callback(error, null);
    }
}
function greet(error, data) {
    if (error) {
        console.log(error.message);
    } else {
        console.log(data);
    }
}
// f3('Alice', greet);
f3(123, (error, data) => {
    if (error){
        console.log(error.message);
    }
    else {
        console.log(data);
    }
});

// Q: write the above two functions as anonymous functions and arrow functions?
