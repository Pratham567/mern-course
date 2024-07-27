// // Object literal -> key-value pairs
// type of -> object
// Accessing a member, nested objects


const objectName = {
    firstName: "Pratham",
    "lastName": "Gupta",
    "age": 21,
    getFullName: function(){
        // console.log(this.firstName + " " + this.lastName);
        return this.firstName + " " + this.lastName;
    },
    // Write a method which returns YoB given 
    // today's year as input
    getYearOfBirth: function(currentYear){
        return currentYear - this.age;
    }
}
// Assign a new variable whose key = hobby
// and value = "coding"
objectName["hobby"] = "coding";

// console.log(objectName["firstName"]);
// console.log(objectName.firstName);
// objectName.getFullName();
// let varName = objectName.getFullName();
// console.log(varName);


// console.log(objectName.firstName, objectName.lastName)






// assessing a member using dot notation
// HW: accessing a member using bracket notation
// adding a new member
// 
// HW: deleting a member
// methods of an object
// constructor objects

// // basic object: key-value pairs













// Logging multiple values
// console.log(person.firstName, person.lastName, person.age);

// // create a function inside an object (use this keyword) 
// Q write a method inside the object to return full name



// object -> firstName, lastName, age
let personInfoForm = function (firstName, lastName, age) {
    var person = {
        "firstName": firstName,
        "lastName": lastName,
        "age": age
    }
    return person;
}

// let prathamInfo = new personInfoForm("pratham", "gupta", 21);
// console.log(typeof prathamInfo);

// let satyamInfo = personInfoForm("satyam", "gupta", 21);

// constructor function syntax













// // constructor function (use new keyword)
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
console.log(typeof Person);
var prathamInfo = new Person("pratham", "gupta", 21);
console.log(typeof prathamInfo);
// console.log(new Person("pratham", "gupta", 21));


// HW: Read why we are calling it as a function, not inside object






// console.log(typeof Person);
// const prathamVariable = new Person("Pratham", "Gupta", 21);
// console.log(typeof prathamVariable);
// console.log(prathamVariable);
// const person2 = Person("Rahul", "Gupta", 21); // this will not work, undefined

// HW: deleting a member
// delete person.age;
// console.log(person);

// Q: Create a constructor function to create a todo item
// members of todo item: title, description, status

















// // constructor function with method
// function Person1(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.fullName = function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// accessing a method
// const person2 = new Person1("Pratham", "Gupta", 21);
// console.log(person2.fullName());

// Q: Create a methods in constructor function to return the title and status








// // Classes
// class Person2 {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     fullName() {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person3 = new Person2("Pratham", "Gupta", 21);
// console.log(Person2);

