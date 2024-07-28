
// Object Literals
const person = {
    firstName: "Pratham",
    lastName: "Gupta",
    age: 20,
    email: "pratham@gmail.com",
    hobbies: ['music', 'sports'],
    address: {
        city: "Delhi",
        state: "Delhi"
    },
    getBirthYear: function () {
        return 2020 - this.age;
    }
}
// console.log(person);



// simple method to create and return an object
function createPerson(firstName, lastName, age, email, hobbies, city, state) {
    let personObject = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getBirthYear: function () {
            return 2024 - this.age;
        }
    };
    return personObject;
}
const personFromNormalFunction = createPerson("Pratham", "Gupta", 20);
// console.log(personFromNormalFunction);




// Initialize objects using constructor function
// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
}
const person1 = new Person("Pratham", "Gupta", "08-09-2000");
// console.log(person1);
















// // ES6 Classes
class PersonClass {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person2 = new PersonClass("Pratham", "Gupta", "08-09-2000");
// console.log(person2);
// console.log(typeof person2);
// console.log(person2.getBirthYear());
// console.log(person2.getFullName());













// // ES6 Classes Inheritance
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name); // Call the parent constructor
//     }

//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// const dog = new Dog('Tommy');
// dog.speak();




// Q Given a class PersonClass:
// // Q: Create a class employee which extends person class and has a job property
// // Q: Create a class student which extends person class and has a college property
// // Q: Create a class teacher which extends person class and has a subject property
/*
    class PersonClass {
        constructor(firstName, lastName, dob) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date(dob);
        }
        getBirthYear() {
            return this.dob.getFullYear();
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
*/
// let pratham = new Person("Pratham", "Gupta", "08-09-2000");












// class Employee extends Person {
//     constructor(firstName, lastName, dob, job) {
//         super(firstName, lastName, dob);
//         this.job = job;
//     }
//     getJob() {
//         return this.job;
//     }
// }

// class Student extends Person {
//     constructor(firstName, lastName, dob, college) {
//         super(firstName, lastName, dob);
//         this.college = college;
//     }
//     getCollege() {
//         return this.college;
//     }
// }

// class Teacher extends Person {
//     constructor(firstName, lastName, dob, subject) {
//         super(firstName, lastName, dob);
//         this.subject = subject;
//     }
//     getSubject() {
//         return this.subject;
//     }
// }

// const employee = new Employee("Pratham", "Gupta", "08-09-2000", "Student");
// console.log(employee);
// console.log(employee.getBirthYear());
// console.log(employee.getFullName());
// console.log(employee.getJob());

// const student = new Student("Pratham", "Gupta", "08-09-2000", "DTU");
// console.log(student);
// console.log(student.getBirthYear());
// console.log(student.getFullName());
// console.log(student.getCollege());

// const teacher = new Teacher("Pratham", "Gupta", "08-09-2000", "Maths");
// console.log(teacher);
// console.log(teacher.getBirthYear());
// console.log(teacher.getFullName());
// console.log(teacher.getSubject());







// HW: Read more about ES6 classes and practice questions
// HW: Just read about how to perform inheritances using prototype in JS



