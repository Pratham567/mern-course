console.log('Start');
setTimeout(() => {
    console.log('setTimeout');
}, 0);
Promise.resolve()
    .then(() => {
        console.log('Promise');
    });
console.log('End');
function f1(){
    console.log('f1');
}
function f2(callback){
    console.log('f2');
    callback();
}
f2(() => {console.log('f3')});










// HW: Promise Reject
// // Promise reject
// Promise.reject('Promise reject').then(() => {
//     console.log('Promise resolve');
// }
// ).catch((error) => {
//     console.log(error);
// }
// );