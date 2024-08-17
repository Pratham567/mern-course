
// npm install jsonwebtoken
const jwt = require('jsonwebtoken');

// 1. Create a secret
const SECRET = "aVeryComplexSecret";
// 2. Create a payload
const payload = {
    'id': 1234567890,
    'email': 'go4pratham0897@gmail.com'
};
// 3. Create a token
const token = jwt.sign(payload, SECRET);
console.log(`Token: ${token}`);
// 4. Verify the token
jwt.verify(token, SECRET, (err, decodedToken) => {
    if(err){
        console.log("Verification Failed");
        console.log(err.message);
    }else{
        console.log("Decoded Successfully");
        console.log(decodedToken);
        console.log(typeof decodedToken);
    }
});

// 5. Tamper the token and verify again














































// // 1. Create a secret
// const SECRET = 'aVeryComplexSecret';
// // 2. Create a payload
// const payload = {
//     data: "This is my payload"
// };

// // 3. Create a token
// const token = jwt.sign(payload, SECRET);

// console.log(token);

// // 4. Verify the token
// jwt.verify(token, SECRET, (err, decodedToken) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(decodedToken);
//     }
// });
