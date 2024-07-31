// // // querySelector -> returns the first element that matches the selector
// We can use any selector that we use in CSS
// use selector combination to select the element


const elem = document.querySelector("ul li");
// We can now apply the styles to the element
// elem.style.color = "red";
// elem.style.backgroundColor = "green";


// const spanElement = document.querySelector("#span-id");
// spanElement.style.color = "red";
// spanElement.textContent= "This is updated from JS";








// // Selecting an id
// var h2Elem = document.querySelector('#h2-id-2');









// Selecting a class
// syntax
// const varName = document.querySelector('.className');










// Select the last child of item
// const item = document.querySelector(".list-item:last-child");
// item.style.color = "red";



// Select nth child of item
// const item = document.querySelector(".list-item:nth-child(2)");
// item.style.color = "red";



// selector: "input[type='submit']"
// const submitElem = document.querySelector("input[type='submit']");
// submitElem.value = "New Value";
















// // Multiple element selectors

// querySelectorAll
// const items = document.querySelectorAll(".list-item");
// // console.log(typeof items);
// // console.log(items);

// var oddElem = document.querySelectorAll("li:nth-child(odd)");
// console.log(typeof oddElem);
// console.log(oddElem);
// // set the background color of the odd elements 
// // to lightgray
// oddElem.forEach(function(elem) {
//     elem.style.backgroundColor = "lightgray";
// });












// // Changing the class
// const header = document.querySelector("#header");
// header.className = "new-class";

// // Adding a class
// const header = document.querySelector("#header");
// header.classList.add("new-class");

// // Removing a class
// const header = document.querySelector("#header");
// header.classList.remove("new-class");

// // HW: Toggling a class
// const header = document.querySelector("#header");
// header.classList.toggle("new-class");

