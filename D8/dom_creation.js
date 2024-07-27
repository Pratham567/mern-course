// // // // Creating an element

// // Creating an element
const divElem = document.createElement("div");
divElem.style.color = "red";
divElem.style.backgroundColor = "black";
divElem.style.padding = "10px";
divElem.style.borderRadius = "10px";
divElem.textContent = "Hello World";
// // Add class and id and attribute
divElem.classList.add("new-class");
divElem.id = "new-id";
divElem.setAttribute("data-id", "1234");
console.log(divElem);
document.body.appendChild(divElem);

// create a text Node and add to the div
const para = document.createElement("p");
para.textContent = "This is a paragraph";
// const text = document.createTextNode("Hello World");
divElem.appendChild(para);

// Question: add it to the last element of the header div
// const header = document.querySelector("header");

// Question: add it to the first element of the div which has class random
// const random = document.querySelector("div.random");
// random.insertBefore(divElem, random.firstChild);
