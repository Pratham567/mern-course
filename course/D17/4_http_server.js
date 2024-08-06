
// 1. create a server
// 2. run the server (listen for requests)
// 3. handle requests -> send a response -> content, type, code

const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     res.setHeader('Content-Type', 'text/html');
//     res.statusCode = 200;
//     // res.write('<h1>Hello, this is a response from the server.</h1>');
//     res.end('<h1>Hello, this is a response from the server.</h1>');
// });

// localhost/3010 -> wrong
// localhost:3010 -> correct

// Q: send a plain text instead of html

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     res.setHeader('Content-Type', 'text/plain');
//     res.statusCode = 200;
//     res.end('Hello123, this is a response from the server.');
// });

// // run the server
// server.listen(3010, 'localhost', () => {
//     console.log('Server is listening on port 3010');
// });


//Q:Send the html file instead of plain text

// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     const fileName = './views/index.html';
//     fs.readFile(fileName, (err, data) => {
//         if (err) {
//             res.statusCode = 404;
//             console.log(err);
//             res.end('Error reading the file');
//         } else {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/html');
//             res.end(data);
//         }
//     });
// });

// // run the server
// server.listen(3010, 'localhost', () => {
//     console.log('Server is listening on port 3010');
// });





















// const server = http.createServer( (req, res) => {
//     console.log('Request received');
//     console.log(req.url, req.method);
//     // console.log(res);
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Hello, this is a response from the server.');
//     res.statusCode = 200;
//     res.end();
// });

// Q: What is the difference between res.write() and res.end()?
// Q: Send a response with HTML content.
// Q: Send a response with JSON content.


// Q: Use setTimeout to delay the response, and observe the behavior.










// // HW: Send JSON content (API)
const responseObj = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(JSON.stringify(responseObj));

const server = http.createServer( (req, res) => {
    console.log('Request received');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(responseObj));
});

server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
});



