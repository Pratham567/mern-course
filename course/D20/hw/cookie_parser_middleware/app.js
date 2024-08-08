// npm install cookie-parser

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Setup Cookie-Parser middleware
app.use(cookieParser());

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Create a route to set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'JohnDoe');
    res.send('Cookie has been set');
});

// Create a route to read the cookie
app.get('/read-cookie', (req, res) => {
    const username = req.cookies.username;
    res.render('cookie', { username });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});