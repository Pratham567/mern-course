

// middleware -> function that runs between the request and the response


// 1. Create an express server
// 2. start the server (listen for requests)
// 3. Add a middleware function to log the request (req.method, req.url, req.hostname, req.ip, req.path, req.time)
// 4. Add a route to send a response




// 1. Create an express server
const express = require('express');
const app = express();
const port = 3040;

// 2. start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// 3. Add a middleware function to log the request
app.use((req, res) => {
    console.log('New request');
    console.log(req.method);
    console.log(req.url);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.path);
    // we can also add a time stamp
}
);

// 4. Add a route to send a response
app.get('/', (req, res) => {
    res.send('Home page');
});

// Q: What is going to happen?

// Q: If we remove all the routes and just have middleware function, what will happen?
// Q: What if we place logging middleware function after the route?












// app.use((req, res, next) => {
//     console.log('New request');
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.hostname);
//     console.log(req.ip);
//     console.log(req.path);
//     next();
// }
// );



// Can we use multiple middleware functions?
// Can we use multiple app.use() functions?


// Q: Add another middleware to log something on console
// Add a new middleware function to log something
// app.use((req, res, next) => {
//     console.log('I am in the next middleware function');
//     next();
// }
// );


