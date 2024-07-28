// // // Selecting elements
// // Single element selectors

// // Get an element by using the id
// getElementById
const divElement = document.getElementById("div-id");
// console.log(divElement);















// print textContent
// print innerText
// Difference between textContent and innerText
// textContent includes the text of all the elements
// innerText includes the text of the visible elements (pays attention to style)
// console.log(divElement.textContent);
// console.log(divElement.innerText);














// InnerHTML and OuterHTML
// update textContent
// Update innerHTML -> divElement.innerHTML = "<h1>HTML updated from JS</h1>";
// Style changes -> divElement.style.color = "red";
// Note: It has to use camelCase for the style properties, even though it is a CSS property











// Q: select element with id div-id-2
// Update the textContent of the element
// Update the font color of the element
// Update the font size of the element
// Print & Update the innerHTML of the element






















// // getElementsByClassName
// Note: Notice the plural form of elements, because it returns a collection
// getElementByClassName does not exist
// const items = document.getElementsByClassName("list-item");
// Update the textContent of the first element
// Update the font color of the first element
// Update the font weight of the first element
// items[0].style.font-weight = "bold"; // ??










// Apply some style to all the elements
// items.style.fontWeight = "bold"; // Note: This will not work as it is a collection
// for (let i = 0; i < items.length; i++) {
//     items[i].style.color = "red";
// }







// // getElementsByTagName
// const items = document.getElementsByTagName("li");

