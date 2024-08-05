// Routes are the different paths that the user can visit in the website
// Routing is the process of selecting a path for the user to visit


const http = require('http');
const fs = require('fs');


// 1. Create a server
// 2. Set the content type to text/html
// 3. Add switch case for different paths (use req.url)
// 4. Set the html file and status code based on the path
// 6. Listen for requests (port 3010)

const server = http.createServer( (req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    let path = './views/error.html';
    switch (req.url) {
        case '/':
            path = './views/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path = './views/about.html';
            res.statusCode = 200;
            break;
        default:
            path = './views/error.html';
            res.statusCode = 404;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.end();
        } else {
            res.end(data);
        }
    });
}
);


server.listen(3010, 'localhost', () => {
    console.log('Server is listening on port 3010');
});









// Send html content based on different paths
// const server = http.createServer( (req, res) => {
//     console.log(req.url, req.method);

//     // Set header content type
//     res.setHeader('Content-Type', 'text/html');
    
//     // Routing
//     let path;
//     switch (req.url) {
//         case '/':
//             path = './views/index.html';
//             break;
//         case '/about':
//             path = './views/about.html';
//             break;
//         default:
//             path = './views/error.html';
//     }
    
//     // read the file
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             res.end(data);
//         }
//     });
// }
// );

// server.listen(3000, 'localhost', () => {
//     console.log('Server is listening on port 3000');
// } );




// Add status code
// res.statusCode = 404;