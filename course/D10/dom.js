
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










// Common properties of the document object
// console.log(document.domain); 
// console.log(document.URL);
// console.log(document.title);
// document.title = "New Title";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);












// Outer HTML vs Inner HTML
// console.log(document.body.innerHTML);

// Outer HTML includes the element itself
// Inner HTML does not include the element itself
// console.log(document.body.outerHTML);
// console.log(document.body.innerHTML);















// HW: Read through the document.all property











// // Selecting all forms of the body
// console.log(document.forms);
// let forms = document.forms;





// Note: this collection is not an array but an HTMLCollection

// HW: Read through the HTMLCollection
// console.log(document.forms);
// console.log(document.forms[0]);

// // Selecting all links of the body
// let links = document.links;
// console.log(links);

// // Selecting all images of the body

// // Selecting all scripts of the body
let scripts = document.scripts;
console.log(scripts);
console.log(scripts[0].outerHTML);


