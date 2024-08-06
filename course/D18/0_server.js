// Routes are the different paths that the user can visit in the website
// Routing is the process of selecting a path for the user to visit

const http = require('http');
const fs = require('fs');

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
            res.end(err.message);
        } else {
            res.end(data);
        }
    });
}
);


server.listen(3010, 'localhost', () => {
    console.log('Server is listening on port 3010');
});

