

// globally scoped
var fname = "Pratham";

console.log(fname); // Pratham

function greet(){
    var lname = "Gupta";
    console.log(fname);
    console.log(lname);
}

// console.log(lname);

greet();

if (true) {
    var age = 20;
    console.log(age);
    let age_2 = 21;
}
console.log(age);
// console.log(age_2);