// if
// if-else
// if-else-if
// if-else-if-else

// if (condition) { ... }
// if (condition) { ... } else { ... }
// if (condition1) { code1 } 
// else if (condition) { code2 }
// else { ... }

var v1 = 40;
var v2 = 20;
// is v1 is divisible by v2, 
//then print "divisible"
if (v1 % v2 == 0){
    console.log("divisible");
}

if (v1 % v2 != 0){
    console.log("not divisible");
}

if(v1 % v2 == 0){
    console.log("divisible");
} else {
    console.log("not divisible");
}

// Q: use if-else to check 
// if a number is positive, 
// negative or zero
var num1 = 0;
if(num1 > 0){
    console.log("Positive");
} else if (num1 < 0){
    console.log("Negative");
} else{
    console.log("Zero");
}

// check if num is either positive or even
// || -> OR operator (either condition should match)
var num2 = 100;
if (num2 > 0 || num2 %2==0){
    console.log("Positive or even");
} 

//  check if a number is either negatve or odd
// 100, -1, 33, 45
num2 = -1;
if(++num2  < 0 || num2 %2 != 0){ //  0 < 0
    console.log("Negative or odd");
}
let num3 = 100;
let num4 = 101;
if(num3-- >= num4++ || num3%2==1 ){ 
    console.log("num3 is greater than or equal to num4");
}

// logical AND
v1 = 2;
v2 = 4;
let v3 = 6;
let v4 = 8;

if(v2==v1*2){ // 4 == 2*2
    console.log("v2 is double of v1");
    if(v2<10){ // 4 < 10
        console.log("END GOAL");
    }
}

if(v2==v1*2 && v2 < 10 ){
    console.log("END GOAL");
}
// || => OR -> either of condition is true
// && => AND -> both conditions are true

let p1 = 1;
let p2 = 2;
let p3 = 3;
let p4 = 4;

if( (p1 < p2) && (p3 <p4)){ // -> condition1
    // console.log("p1 is less than p2 and p3 is less than p4");
}
// check condition1 or check if p1 is odd
if( ((p1 < p2) && (p3 <p4) ) || p1%2==1 ){
    // console.log("HURRAY!!");
}

// check condition1 should not match OR p1 is even
if (!((p1 < p2) && (p3 <p4))  || p1%2==0 ){
    console.log("HURRAY!!");
}

var number1 = 10;
var number2 = 100;
if(!(number1++ == --number2)){
    console.log("Numbers are not equal");
}































// // clubbing multiple conditions
// // use if-else to check if a given year is a leap year or not
// // Definition of a leap year
// // A year is a leap year if it is divisible by 4 and not divisible by 100
// // A year is a leap year if it is divisible by 400

// // if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
// //     console.log(`${year} is a leap year`);
// // }
