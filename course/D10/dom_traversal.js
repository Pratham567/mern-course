// // // // Traverse the DOM


// Parent Node
const body = document.body;
// console.log(body.parentNode);

// Children
// console.log(body.children);

// select all ul of class: .list
// var items = document.querySelector(".list");
// console.log(items.children);













// change color of parent node
// items.parentNode.style.backgroundColor = "lightgray";

// Question ??
// console.log(items.parentNode.children);
// console.log(items.parentNode.parentNode);

// First Element Child
// The firstElementChild property returns the first child element of the specified element.
// console.log(items.firstElementChild);

// Last Element Child
// The lastElementChild property returns the last child element of the specified element.
// console.log(items.lastElementChild);

// Next Element Sibling
// The nextElementSibling property returns the element immediately following the specified element, in the same tree level.
// console.log(items.nextElementSibling);

// Previous Element Sibling
// The previousElementSibling property returns the previous element of the specified element, in the same tree level.
// console.log(items.previousElementSibling);






// HW: Read about differences between childNodes and children
// HW: Read about the difference between firstChild and firstElementChild
// HW: Read about the difference between nextSibling and nextElementSibling
// HW: Read about the difference between parentNode and parentElement
// HW: Read about the difference between previousSibling and previousElementSibling
// HW: Read about the difference between lastChild and lastElementChild



















// Archive
// Child Nodes and Children and Parent Node
// Element nodes: These are the HTML elements (tags) that are children of the items element.
// Text nodes: These are nodes representing the text inside an element. Even whitespace (like spaces, newlines, and tabs found in the source code for formatting) can generate text nodes. 
// Comment nodes: If there are any HTML comments (<!-- comment -->) inside the items element, these will also be included in the childNodes.
// const body = document.body;
// console.log(body.childNodes);
// console.log(body.children);

// ChildNode vs Children
// childNodes includes all nodes (text nodes, comment nodes, and element nodes)
// children includes only element nodes