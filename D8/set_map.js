

// // Sets
// A Set is a collection of unique values in JavaScript. 
// Unlike arrays, Set objects store unique values of any type, 
// whether primitive values or object references. 
// Set also provides methods and properties to work with its contents, 
// such as adding, deleting, and checking for values, 
// as well as retrieving the set size.

let mySet = new Set();
mySet.add(1); // Add a value to the Set
mySet.add(2);
mySet.add(2); // This will not be added as 2 is already present
mySet.add(5);
mySet.add(4);
// mySet.add("abcd");
console.log(mySet); // Output: Set(2) {1, 2}

// console.log(mySet.has(1)); // true
// mySet.delete(2); // Remove 2 from the set
// console.log(mySet.size); // 1



// // Maps
// A Map is a collection of keyed data items, 
// just like an Object. 
// But unlike objects, Map allows keys of any type.
// Maps maintain the insertion order of their elements, 
// which means that when iterating over a Map, 
// the elements will be returned in the order they were inserted.
let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set(4, 'value3');
console.log(myMap.get('key1')); // Output: value1
console.log(myMap.has('key2')); // true
myMap.delete('key1'); // Delete item with key 'key1'
console.log(myMap.size);
console.log(myMap);


// // HW: Read about symbols and practice questions