
const peoples = ["John", "Sara", "Jack", "Jill", "Tom", "Jerry", "Mike", "Mary", "Jane", "Doe"];

// Export multiple values from this module
const ages = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
function sayHello() {
    console.log("Hello from 2_people.js");
}

console.log(peoples);

module.exports = {peoples, ages, sayHello};









// Export from this module
// module.exports = peoples;






// Short hand property
// module.exports = { peoples, ages };











// Export function
// module.exports = {
//     peoples,
//     sayHello
// };



