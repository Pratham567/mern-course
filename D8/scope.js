

// 1. Global Scope
// A variable or function declared in the global scope is accessible from any other scope
// Global variables can be accessed and modified from any other scope, which can lead to potential issues with variable naming conflicts and security.

var globalVar = "I am global";

if(true){
    console.log(globalVar); // Accessible here
    var blockScopedVar = "I am block";
    let blockScopedLet = "I am block let";
    console.log(blockScopedVar); // Accessible here
}
// console.log(blockScopedVar); // ??
// console.log(blockScopedLet); // ??


function accessGlobalVar() {
    console.log(globalVar); // Accessible here
    var localVar = "I am local";
}

// console.log(localVar);
console.log(globalVar); // Also accessible here

// 2. Local (or Function) Scope
// Variables and functions declared within a function are in the local scope of that function. 
// They can only be accessed and used within that function.
// Each function creates a new scope.
function myFunction() {
    var localVar = "I am local";
    console.log(localVar); // Accessible here
}
myFunction();

// Block Scope (ES6)
// let and const declarations are block-scoped. This means they are only accessible within the block ({}) they are defined in, such as loops or if statements.
// This is in contrast to var, which is function-scoped.
// if(true) {
//     var blockVar = "I am block";
//     console.log(blockVar); // Accessible here
// }
// console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined


// // Lexical Scope (Static Scope)
// // Lexical scope means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.
// function outerFunction() {
//     var outerVar = "I am from outer";

//     function innerFunction() {
//         console.log(outerVar); // "I am from outer"
//     }

//     innerFunction();
// }

// outerFunction();