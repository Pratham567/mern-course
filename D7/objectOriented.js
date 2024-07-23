
// // Initialize objects using constructor function
// // Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     // function inside constructor
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
// }
// // Instantiate object
// const person1 = new Person("Pratham", "Gupta", "08-09-2000");
// console.log(person1);
// console.log(typeof person1);
// console.log(person1.getBirthYear());
// const person2 = new Person("Prashant", "Gupta", "08-09-2000");

// // initialize dob with date (nested object)
// function AnotherPerson(name, age, dob) {
//     this.name = name;
//     this.age = age;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.name} ${this.age}`;
//     }
// }
// const anotherPerson = new AnotherPerson("Pratham", 20, "08-09-2000");
// console.log(anotherPerson);
// console.log(typeof anotherPerson);
// console.log(anotherPerson.getBirthYear());
// console.log(anotherPerson.getFullName());
// console.log(anotherPerson['name']);


// // Prototype and Inheritance
// Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }
// // Prototype
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }
// // Instantiate object
// const person1 = new Person("Pratham", "Gupta", "08-09-2000");
// console.log(person1);
// console.log(typeof person1);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());


// HW: Read more about prototype and inheritance, and practice questions
// Set another class as prototype of Person class and inherit its properties
// Another constructor function
// function AnotherPerson(name, age, dob, job) {
//     Person.call(this, name, age, dob);
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }
// // Inherit prototype
// AnotherPerson.prototype = Object.create(Person.prototype);
// // Instantiate object
// const anotherPerson = new AnotherPerson("Pratham", 20, "08-09-2000", "Student");
// console.log("anotherPerson");
// console.log(anotherPerson);
// console.log(anotherPerson.getBirthYear());
// console.log(anotherPerson.getFullName());
// console.log(anotherPerson['name']);
// console.log(anotherPerson['job']);


// // // ES6 Classes

// // ES6 Classes
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new Person("Pratham", "Gupta", "08-09-2000");
// console.log(person1);
// console.log(typeof person1);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// const person2 = new Person("Prashant", "Gupta", "08-09-2000");


// ES6 Classes Inheritance
// class Employee extends Person {
//     constructor(firstName, lastName, dob, job) {
//         super(firstName, lastName, dob);
//         this.job = job;
//     }
// }
// const employee = new Employee("Pratham", "Gupta", "08-09-2000", "Student");
// console.log(employee);
// console.log(employee.getBirthYear());
// console.log(employee.getFullName());

// HW: Read more about ES6 classes and practice questions



