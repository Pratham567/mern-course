// const express = require('express');
// const app = express();
// const path = require('path');

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));


// // Basic Looping
// app.get('/basic-looping', (req, res) => {
//     res.render('basic-looping');
// });


// // Conditional Rendering
// app.get('/conditional-rendering', (req, res) => {
//     const currentHour = new Date().getHours();
//     res.render('conditional-rendering', { currentHour });
// });


// // Rendering a List
// app.get('/rendering-list', (req, res) => {
//     const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
//     res.render('rendering-list', { fruits });
// });


// // Displaying User Information
// app.get('/user-info', (req, res) => {
//     const users = [
//         { name: 'Alice', age: 25 },
//         { name: 'Bob', age: 30 },
//         { name: 'Charlie', age: 35 }
//     ];
//     res.render('user-info', { users });
// });


// // Including Partials
// app.get('/partials', (req, res) => {
//     res.render('partials');
// });


// // Form Handling
// app.get('/form', (req, res) => {
//     res.render('form', { submittedName: req.query.name });
// });


// // Escaping vs. Unescaped Output
// app.get('/escaping', (req, res) => {
//     const htmlString = "<strong>This is bold text</strong>";
//     res.render('escaping', { htmlString });
// });


// // Dynamic Content
// app.get('/dynamic-content', (req, res) => {
//     const isLoggedIn = true;
//     const userName = "John Doe";
//     res.render('dynamic-content', { isLoggedIn, userName });
// });


// // Loop with Conditionals
// app.get('/fizzbuzz', (req, res) => {
//     res.render('fizzbuzz');
// });


// // Nested Loops
// app.get('/multiplication-table', (req, res) => {
//     res.render('multiplication-table');
// });


// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });