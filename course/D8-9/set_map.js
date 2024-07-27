

// // Sets
// A Set is a collection of unique values in JavaScript. 
// Unlike arrays, Set objects store unique values of any type, 
// whether primitive values or object references. 
// Set also provides methods and properties to work with its contents, 
// such as adding, deleting, and checking for values, 
// as well as retrieving the set size.

// let mySet = new Set();
// Add a value to the Set: set.add(value)
// Adding a value of different type

// // Operations on set
// check if a value exists in the set: set.has(value)
// delete a value from the set: set.delete(value)
// get the size of the set: set.size


// let setOfNumber = new Set();
// console.log(typeof setOfNumber);
// setOfNumber.add(1);
// console.log(setOfNumber.size);
// console.log(setOfNumber);
// console.log(setOfNumber.size);


let obj1 =  {"name": "Pratham"};
let obj2 =  {"name": "Rohan"};

// Maps
let mapOfNumber = new Map();
mapOfNumber[1] = 'a';
mapOfNumber[obj1] = 'key-1';

// set
mapOfNumber.set(1, 'b');

// console.log(mapOfNumber[obj1])
// console.log(mapOfNumber[555])
// console.log(mapOfNumber);
console.log(mapOfNumber.size);

// Q: check if a key exists in the map: map.has(key)
// If map has key: 2, then print Hurray!!

// Q: fetch the value of the key: 2 
// and store in a variable
// mapOfNumber.get(2);

// Q: Delete the key: 2 using the map.delete(key)


// delete a key-value pair from the map: map.delete(key)
// get the value associated with a key: map.get(key)
// get the size of the map: map.size
























// // Maps
// A Map is a collection of keyed data items, 
// just like an Object. 
// But unlike objects, Map allows keys of any type.
// Maps maintain the insertion order of their elements, 
// which means that when iterating over a Map, 
// the elements will be returned in the order they were inserted.

// let myMap = new Map();
// Add a key-value pair to the Map: map.set(key, value)
// Adding a key of different type

// // Operations on map
// check if a key exists in the map: map.has(key)
// delete a key-value pair from the map: map.delete(key)
// get the value associated with a key: map.get(key)
// get the size of the map: map.size
