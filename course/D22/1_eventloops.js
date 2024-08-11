console.log('Start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve()
    .then(() => {
        console.log('Promise');
    });

console.log('End');











// HW: Promise Reject
// // Promise reject
// Promise.reject('Promise reject').then(() => {
//     console.log('Promise resolve');
// }
// ).catch((error) => {
//     console.log(error);
// }
// );