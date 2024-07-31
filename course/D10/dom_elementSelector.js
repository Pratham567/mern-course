// // // Selecting elements
// // Single element selectors

// // Get an element by using the id
// getElementById
// const divElement = document.getElementById("div-id");
// console.log(divElement);
// console.log(typeof divElement);
// console.log(divElement.id);
// console.log(divElement.outerHTML);
// console.log(divElement.innerHTML)















// print textContent
// print innerText
// Difference between textContent and innerText
// textContent includes the text of all the elements
// innerText includes the text of the visible elements (pays attention to style)
// const divElement = document.getElementById("div-id");
// console.log(divElement.textContent);
// console.log(divElement.innerText);



// Styles
// const divElement = document.getElementById("div-id");
// divElement.style.backgroundColor = "peachpuff";
// change font size of the element
// divElement.style.fontSize = "24px";















// InnerHTML and OuterHTML
// update textContent
// Update innerHTML -> divElement.innerHTML = "<h1>HTML updated from JS</h1>";
// Style changes -> divElement.style.color = "red";
// Note: It has to use camelCase for the style properties, even though it is a CSS property











// Q: select element with id div-id-2
// const divElement = document.getElementById("div-id-2");
// // Update the textContent of the element
// divElement.textContent = "Text content updated from JS";
// // Update the font color of the element
// divElement.style.color = "red";
// // Update the font size of the element
// divElement.style.fontSize = "24px";
// // Print & Update the innerHTML of the element
// console.log(divElement.innerHTML);
// divElement.innerHTML = "<h1>DIV updated from JS</h1>";
























// // getElementsByClassName
// Note: Notice the plural form of elements, because it returns a collection
// getElementByClassName does not exist
// const items = document.getElementsByClassName("list-item");
// Update the textContent of the first element
// Update the font color of the first element
// Update the font weight of the first element
// items[0].style.fontWeight = "bold"; // ??










// Apply some style to all the elements
// const items = document.getElementsByClassName("list-item");
// items.style.fontWeight = "bold"; // Note: This will not work as it is a collection
// for (let i = 0; i < items.length; i++) {
//     items[i].style.color = "red";
// }







// // getElementsByTagName
// const items = document.getElementsByTagName("li");
// console.log(items);

