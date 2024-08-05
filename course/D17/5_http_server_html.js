const http = require('http');
const fs = require('fs');


// Q: Write a http server to send an HTML file (views/index.html) as response.
// 1. Create a server
// 2. Set the content type to text/html
// 2. Send an HTML file as response
// 3. Listen for requests (port 3000)


const server = http.createServer((req, res) => {
    
});

server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
});
















// // Send html content
// const server = http.createServer( (req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     // read the file
//     const fileName = './views/index.html';
//     fs.readFile(fileName, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             res.end(data);
//         }
//     });
// });

// server.listen(3000, 'localhost', () => {
//     console.log('Server is listening on port 3000');
// });


// Q: create another file in the views folder, and send that file as response.
// Q: No matter what path is requested, send the same file as response.















