// // Arrays

// Array Basics
// 1. Create an array named colors and store 5 color names into it.
// 2. console.log the length of the array.
// 3. console.log the 3rd element in the array.
// 4. delete the last element in the array.
// 5. add 'black' at the end of the array.
// 6. remove the first element in the array.
// 7. Add another color at the end of the array.
// 7. join all the elements and return the result.


// create an array of numbers
// sort the array
// reverse the array




let array1 = [1, 2, 3, 4, 5];
// 

function printElem(num) {
    console.log(num);
}

// array1.forEach(printElem);

// For each element of arr, print square
array1.forEach(function (num1) {
    console.log(num1 * num1);
});

// HW: try the above with arrow method

function getSquare(num1) {
    return num1 * num1;
}

var newArray = array1.map(getSquare);

// write a function to return the cube

function isEven(number) {
    return number % 2 === 0;
}

var evenSquare = array1.filter(isEven).map(getSquare);
console.log(evenSquare);

function isLessThan10(number) {
    return number < 10;
}

function isOdd(number) {
    return !isEven(number);
}

// Write logic to 
// return square of odd numbers 
// which is less than 10
var oddSquare = array1.filter(isOdd).map(getSquare).filter(isLessThan10);
console.log(oddSquare);

var oddArray1 = array1.filter(function (number) {
    return number % 2 !== 0;
}).map(function (number) {
    return number * number;
}).
    filter(function (number) {
        return number < 10;
    });
console.log(oddArray1);


// var evenArray = array1.filter(isEven);
// console.log(evenArray);























// write a function to print the square of a number
// write a function to return the square of a number
// write a function to  check if a number is even. Return true if it is even, false otherwise







// For each element of array, print the element and its square
// // using for loop and forEach
// Using map, create a new array that contains the square of each element
// Using filter, create a new array that contains only the even numbers

const numbers = [1, 2, 3, 4, 5];










// HW: use filer and map together to create a new array that contains the square of each even number
// const evenSquares = numbers.filter((number) => {
//     return number % 2 === 0;
// }).map((number) => {
//     return number * number;
// });
// console.log(evenSquares);

























// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// console.log(colors.length);
// console.log(colors[2]);
// colors.pop();
// colors.push('black');
// colors.shift();
// colors.unshift('purple');
// console.log(colors.join(' '));