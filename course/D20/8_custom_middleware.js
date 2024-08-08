// 1. Create an express server
const express = require('express');
const app = express();
const port = 3040;

// 2. start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Middleware to handle /favicon.ico requests
app.use('/favicon.ico', (req, res) => res.status(204).end());

app.use(middleWare1, middleWare2, logRequest, logTime);

// 4. Add a route to send a response
app.get('/', (req, res, next) => {
    res.send('Home page');
});


function middleWare1(req, res, next) {
    console.log('Middleware 1');
    next();
}

function middleWare2(req, res, next) {
    console.log('Middleware 2');
    next();
}

function logRequest(req, res, next) {
    console.log('Request Info:', req.method, req.url, req.hostname, req.path);
    next()
}

function logTime(req, res, next) {
    console.log('Time:', Date.now());
    next();
}

// // Different ways of writing the same code
// Define multiple middlewares in an object and pass it to app.use()

// const middlewares = {
//     middleWare1: function (req, res, next) {
//         console.log('Middleware 1');
//         next();
//     },
//     middleWare2: function (req, res, next) {
//         console.log('Middleware 2');
//         next();
//     },
//     logRequest: function (req, res, next) {
//         console.log('New request');
//         console.log(req.method, req.url, req.hostname, req.path);
//         next()
//     },
//     logTime: function (req, res, next) {
//         console.log('Time:', Date.now());
//         next();
//     }
// };

// app.use(middlewares.middleWare1, middlewares.middleWare2, middlewares.logRequest, middlewares.logTime);

// using square brackets
// app.use(middlewares['middleWare1'], middlewares['middleWare2'], middlewares['logRequest'], middlewares['logTime']);

// HW: Create a function which takes in one input string, 
// and returns the middleware function based on the input.

// HW: Define all the 4 middlewares in a new module, 
// export it and use it in your app.


