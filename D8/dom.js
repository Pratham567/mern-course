
// DOM -> Document Object Model
// DOM is a programming interface for web documents
// It represents the structure of the document as a tree of objects
// The objects can be manipulated with JavaScript
// console.log(window);
// alert("Hello World");
// window.alert("Hello World");

// Tree structure of the DOM
// The document object is the root of the tree
// The document object has a head and a body
// The head has metadata and the body has the content
// console.log(document);
// console.log(document.body);
// console.log(document.body.outerHTML);

// Outer HTML vs Inner HTML
// Outer HTML includes the element itself
// Inner HTML does not include the element itself
// console.log(document.body.outerHTML);
// console.log(document.body.innerHTML);

// Selecting elements of the tree
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "New Title";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// HW: go through the document.all
// console.log(document.all);

// // Selecting all forms of the body
// Note: this collection is not an array but an HTMLCollection
// console.log(document.forms);
// console.log(document.forms[0]);

// // Selecting all links of the body
// console.log(document.links);

// // Selecting all images of the body
// console.log(document.images);

// // Selecting all scripts of the body
// console.log(document.scripts);


// // // Selecting elements
// // Single element selectors

// getElementById
// const divElement = document.getElementById("div-id");
// console.log(divElement);
// console.log(divElement.textContent);
// console.log(divElement.innerText);
// Difference between textContent and innerText
// textContent includes the text of all the elements
// innerText includes the text of the visible elements (pays attention to style)
// divElement.textContent = "text updated from JS";
// // InnerHTML
// console.log(divElement.innerHTML);
// divElement.innerHTML = "<h1>HTML updated from JS</h1>";
// Style changes
// divElement.style.color = "red";
// divElement.style.backgroundColor = "black";
// Note: It has to use camelCase for the style properties, even though it is a CSS property


// // getElementsByClassName
// Note: Notice the plural form of elements, because it returns a collection
// getElementByClassName does not exist
// const items = document.getElementsByClassName("list-item");
// console.log(items);
// console.log(items[0]);
// items[0].textContent = "Item 1 updated from JS";
// items[0].style.color = "red";
// items[0].style.font-weight = "bold"; // Note:
// items.style.fontWeight = "bold"; // Note: This will not work as it is a collection
// for (let i = 0; i < items.length; i++) {
//     items[i].style.color = "red";
// }
// Will this work?
// items.forEach(element => {
//     element.style.color = "red";
// });


// // getElementsByTagName
// const items = document.getElementsByTagName("li");
// console.log(items);

// // // querySelector -> returns the first element that matches the selector
// We can use any selector that we use in CSS
// use selector combination to select the element
// const elem = document.querySelector("ul li");
// console.log(elem);
// elem.style.color = "red";

// const elem = document.querySelector("input[type='submit']");
// console.log(elem);
// elem.value = "Submit-1";
// // elem.style.color = "red";

// var h2Elem = document.querySelector('#h2-id-2');
// console.log(h2Elem);
// console.log(h2Elem.innerHTML);
// h2Elem.innerHTML = "<h1>Hello World</h1>";
// console.log(h2Elem.textContent);
// h2Elem.textContent = "Hello World";
// console.log(h2Elem.innerText);
// h2Elem.innerText = "Hello World";

// Selecting a class
// const item = document.querySelector(".h2-class-2");
// console.log(item);
// item.style.color = "red";

// var item = document.querySelector(".list-item");
// console.log(item);
// item.style.color = "red";

// Select the last child of item
// const item = document.querySelector(".list-item:last-child");
// console.log(item);
// item.style.color = "blue";

// Select nth child of item
// const item = document.querySelector(".list-item:nth-child(2)");
// console.log(item);
// item.style.color = "green";


// // Multiple element selectors

// querySelectorAll
// const items = document.querySelectorAll(".list-item");
// NodeList, we can run arrays methods on it
// console.log(items);
// items.forEach((item) => {
//   item.style.color = "red";
// });

// var oddElem = document.querySelectorAll("li:nth-child(odd)");
// console.log(oddElem);
// oddElem.forEach((element) => {
//     element.style.backgroundColor = "lightgray";
// });

// // // // // // //
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

