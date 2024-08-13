class Car {
    constructor(name) {
        this.name = name;
    }
    
    hello() {
        return "Hello!!";
    }
}

const myCar = new Car("Ford");

console.log(myCar.hello());






// myCar.hello = function() {
//     return "Hello from myCar!";
// }

// console.log(myCar.hello());