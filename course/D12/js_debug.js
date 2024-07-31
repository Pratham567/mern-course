




let number1 = 50;

let number2 = 100;

let number3 = 150;

function sumOfTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}


function sumofThreeNumbers(num1, num2, num3) {
    let sumOfFirstTwo = sumOfTwoNumbers(num1, num2);
    let sumOfAllThree = sumOfTwoNumbers(sumOfFirstTwo, num3);
    return sumOfAllThree;
}


let sumResult = sumofThreeNumbers(number1, number2, number3);

console.log('Sum:', sumResult);

