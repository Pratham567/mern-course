
// DOM -> Document Object Model
// DOM is a programming interface for web documents
// It represents the structure of the document as a tree of objects
// The objects can be manipulated with JavaScript
console.log(window);

// // create a div element 
// // // inside the body
// const square = document.createElement("div");
// document.body.appendChild(square);
// // // set background color of the square
// square.style.backgroundColor = "black";
// // // set width and height of the square
// square.style.width = "100px";
// square.style.height = "100px";
// // // set the content of the square
// square.textContent = "1";
// // //set content color
// square.style.color = "white";
// // // set the text align to center
// square.style.textAlign = "center";
// // // set the font size
// square.style.fontSize = "20px";


// Comparator function for sorting numbers in ascending order
function compareNumbers(num1, num2) {
    return  num2- num1;
}

// Example array
let arrayNum = [10, 2, 3, 4, 5, 7, 4];

// Using the comparator function with the sort method
arrayNum.sort(compareNumbers);

console.log(arrayNum); // Output will be the sorted array


// Function to create 64 boxes on the board
// function create64Boxes(){
//     const board = document.getElementById("board");
//       for (let i = 0; i < 64; i++) {
//         const square = document.createElement("div");
//         square.innerHTML = i;
//         // Alternate colors
//         if (Math.floor(i / 8) % 2 === 0) {
//           square.className = i % 2 === 0 ? "white-square" : "black-square";
//         } else {
//           square.className = i % 2 !== 0 ? "white-square" : "black-square";
//         }
//         board.appendChild(square);
//       }
// }






// console.log(window);
// alert("Hello World");
// window.alert("Hello World");

// console.log(document);


// // // Selecting elements
// // Single element selectors

// getElementById
// const header = document.getElementById("header");
// console.log(header);

// // getElementsByClassName
// const items = document.getElementsByClassName("item");
// console.log(items);

// // getElementsByTagName
// const items = document.getElementsByTagName("li");
// console.log(items);

// // querySelector
// const header = document.querySelector("#header");
// console.log(header);

// const items = document.querySelector(".item");
// console.log(items);

// const items = document.querySelector("li");
// console.log(items);

// // Multiple element selectors
// getElementsByClassName
// const items = document.getElementsByClassName("item");
// console.log(items);

// // getElementsByTagName
// const items = document.getElementsByTagName("li");
// console.log(items);

// querySelectorAll
// const items = document.querySelectorAll(".item");
// console.log(items);

// const items = document.querySelectorAll("li");
// console.log(items);

// // Looping through the items
// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//   console.log(item);
// });

// // Changing the text content
// const header = document.querySelector("#header");
// header.textContent = "Hello World";

// // Changing the inner HTML
// const header = document.querySelector("#header");
// header.innerHTML = "<h1>Hello World</h1>";

// // Changing the style
// const header = document.querySelector("#header");
// header.style.color = "red";
// header.style.backgroundColor = "black";
// header.style.padding = "10px";
// header.style.borderRadius = "10px";

// // Changing the class
// const header = document.querySelector("#header");
// header.className = "new-class";

// // Adding a class
// const header = document.querySelector("#header");
// header.classList.add("new-class");

// // Removing a class
// const header = document.querySelector("#header");
// header.classList.remove("new-class");

// // Toggling a class
// const header = document.querySelector("#header");
// header.classList.toggle("new-class");

// // Creating an element
// const div = document.createElement("div");
// div.textContent = "Hello World";
// div.style.color = "red";
// div.style.backgroundColor = "black";
// div.style.padding = "10px";
// div.style.borderRadius = "10px";
// document.body.appendChild(div);

// // Adding a class to the created element
// const div = document.createElement("div");
// div.textContent = "Hello World";
// div.classList.add("new-class");
// document.body.appendChild(div);

// // Adding an id to the created element
// const div = document.createElement("div");
// div.textContent = "Hello World";
// div.id = "new-id";
// document.body.appendChild(div);

// // Adding an attribute to the created element
// const div = document.createElement("div");
// div.textContent = "Hello World";
// div.setAttribute("id", "new-id");
// document.body.appendChild(div);

// // Adding a child element
// const div = document.createElement("div");
// const p = document.createElement("p");
// p.textContent = "Hello World";
// div.appendChild(p);
// document.body.appendChild(div);
