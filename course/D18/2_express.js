// install express using npm
// npm install express


// 1. Create an express server
// 2. start the server (listen for requests)
// 3. handle the request
// 3. Add a route to send a response



const express = require('express');
const server = express();
server.listen(3040, 'localhost', () => {
    console.log("server started");
});



server.get('/', (req, res) => {
    console.log(req.url, req.method);
    res.sendFile('./views/index.html', { root: __dirname });
});
server.use((req, res) => {
    res.sendFile('./views/error.html', { root: __dirname });
});
server.get('/about', (req, res) => {
    console.log(req.url, req.method);
    res.sendFile('./views/about.html', { root: __dirname });
});
server.get('/aboutme', (req, res) => {
    console.log(req.url, req.method);
    res.redirect('/about');
});







// Q: why does it not show the content type header in express app

// server.get('/about', (req, res) => {
    // console.log(req.url, req.method);
// });









// const app = express();
// app.listen(3050);

// 3. Add a route to send a response


















// app.get('/', (req, res) => {
//     // send() method sends the response to the client
//     // res.send('<p>Home Page</p>');
// }
// );

// Q: is it needed to set the header content type?
// send() method automatically sets the content type based on the data

// Q: Does the send() method set the status code as well?

