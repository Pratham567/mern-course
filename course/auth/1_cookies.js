const express = require('express');
const app = express();
const port = 3040;


// npm i cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});
app.get('/set-cookie', (req, res)=> {   
    console.log('Setting Cookie');
    const key = 'user';
    const value = 'Pratham';
    res.cookie(key, value);
    res.send('Cookie is set');
});

app.get('/get-cookie', (req, res)=> {
    console.log('Reading Cookie');
    const value = req.cookies.user;
    res.send(`Cookie is read: ${value}`);
});

// 1. Use cookie-parser middleware
// 2. Create a cookie
// 3. Read a cookie
// 4. Delete a cookie

// Q: what is behaviour if I read a cookie which is not present?
// Q: what is behaviour if I delete a cookie which is not present?
// Q: what is the default expiry time of a cookie?
// HW: How to set the expiry time of a cookie?









































// // 1. Use cookie-parser middleware
// app.use(cookieParser());

// // 2. Create a cookie
// app.get('/set-cookie', (req, res) => {
//     console.log('Setting Cookie');
//     res.cookie('user', 'Pratham1');
//     res.send('Cookie is set');
// });

// // 3. Read a cookie
// app.get('/get-cookie', (req, res) => {
//     console.log('Reading Cookie');
//     const user = req.cookies.user;
//     res.send(`Cookie value is ${user}`);
// });

// // 4. Delete a cookie
// app.get('/delete-cookie', (req, res) => {
//     res.clearCookie('user');
//     res.send('Cookie is deleted');
// });