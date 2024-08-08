// 1. Create an express server
const express = require('express');
const app = express();
const port = 3040;

// 2. start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Earlier, we handled favicon using this, but it doesn't send the icon
// Middleware to handle /favicon.ico requests
// app.use('/favicon.ico', (req, res) => res.status(204).end());

app.use(express.static('public')); // folder name

app.use((req, res, next) => {
    console.log('New request');
    console.log(req.method, req.url, req.hostname, req.path);
    next()
}
);

// 4. Add a route to send a response
app.get('/', (req, res, next) => {
    res.send('Home page');
});

