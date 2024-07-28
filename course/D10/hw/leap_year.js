// clubbing multiple conditions
// use if-else to check if a given year is a leap year or not
// Definition of a leap year
// A year is a leap year if it is divisible by 4 and not divisible by 100
// A year is a leap year if it is divisible by 400
const year = 2020;
if(year % 4 === 0 ){
    if(year % 100 !== 0) {
        console.log(`${year} is a leap year`);
    }
    else { // year is divisible by 100
        if(year % 400 === 0) {
            console.log(`${year} is a leap year`);
        }
        else {
            console.log(`${year} is not a leap year`);
        }
    }
}

if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(`${year} is a leap year`);
}

