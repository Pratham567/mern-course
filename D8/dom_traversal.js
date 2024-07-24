// // // // Traverse the DOM

// Tree Structure of the HTML
// The document object is the root of the tree
// The document object has a head and a body
// The head has metadata and the body has the content
// console.log(document);

// Parent Node
// const body = document.body;
// console.log(body.parentNode);

// Child Nodes and Children and Parent Node
//Element nodes: These are the HTML elements (tags) that are children of the items element.
// Text nodes: These are nodes representing the text inside an element. Even whitespace (like spaces, newlines, and tabs found in the source code for formatting) can generate text nodes. 
// Comment nodes: If there are any HTML comments (<!-- comment -->) inside the items element, these will also be included in the childNodes.
// const body = document.body;
// console.log(body.childNodes);

var item = document.querySelector(".list-item");
console.log(item);
console.log(item.parentNode);
console.log(item.childNodes);
console.log(item.children);
// ChildNode vs Children
// childNodes includes all nodes (text nodes, comment nodes, and element nodes)
// children includes only element nodes

// change color of parent node
// item.parentNode.style.backgroundColor = "lightgray";

// Question ??
// console.log(item.parentNode.children);
// console.log(item.parentNode.parentNode);

// First Child
// IMPORTANT: The firstChild property returns the first child node of the specified node, as a Node object.
// console.log(item.firstChild); // 

// First Element Child
// IMPORTANT: The firstElementChild property returns the first child element of the specified element.
// console.log(item.firstElementChild);

// Last Child
// IMPORTANT: The lastChild property returns the last child node of the specified node, as a Node object.
// console.log(item.lastChild);

// Last Element Child
// IMPORTANT: The lastElementChild property returns the last child element of the specified element.
// console.log(item.lastElementChild);

// Next Sibling
// IMPORTANT: The nextSibling property returns the node immediately following the specified node, in the same tree level.
// console.log(item.nextSibling);

// Next Element Sibling
// IMPORTANT: The nextElementSibling property returns the element immediately following the specified element, in the same tree level.
// console.log(item.nextElementSibling);

// Previous Sibling
// IMPORTANT: The previousSibling property returns the node immediately preceding the specified node in its parent's childNodes list, or null if the specified node is the first in that list.
// console.log(item.previousSibling);

// Previous Element Sibling
// IMPORTANT: The previousElementSibling property returns the previous element of the specified element, in the same tree level.
// console.log(item.previousElementSibling);
