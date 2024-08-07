const http = require('http');
const fs = require('fs');


// What is a redirect?
// A redirect is a response from the server that tells the browser to go to a different URL.
// 301: Permanent redirect

// Q: Following the previous example, redirect /aboutme to /about.


// We want to redirect /aboutme to /about
// case -> aboutme
// set status code
// set header -> location -> value is new path

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
        case '/aboutme':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
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


server.listen(3040, 'localhost', () => {
    console.log('Server is listening on port 3040');
});
















// case '/about-me':
//     // redirect to /about
//     res.statusCode = 301;
//     res.setHeader('Location', '/about');
//     res.end();


