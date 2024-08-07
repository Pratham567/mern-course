// Theory:
// Three tags of EJS
// 1. <% %> - for control flow
// 2. <%= %> - for outputting data
// 3. <%- %> - for outputting unescaped data

// install EJS
// npm init
// npm install express
// npm install ejs

// Pre-requisites:
// 1. Create an Express server
// 2. start the server
const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3040;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// set the view engine as ejs
app.set('view engine', 'ejs');
// set the directory for ejs templates
// app.set('views', 'views_1');
// send the html using EJS view engine


const students = [];

// apply middleware to log
// app.use((req, re, next) => {
//    console.log('New request');
//     console.log(req.method);
//     console.log(req.url);
//     next();
// });

app.get('/', (req, res) => {
    console.log('Inside the defult route');
    res.render('index', {title: 'Home', students});
});

app.use((req, re, next) => {
    console.log('second middleware');
    next();
 });

// create routes for /about and /error
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

// create students route
app.get('/students', (req, res) => {
    res.render('students', {title: 'Students'});
});

app.use((req, res) => {
    res.status(404).render('error', {title: 'Error'});
}
);

// Q: In index page, print number from 0 to 10 in the console.










// 1. Register view engine
// 2. Set the views directory
// 3. Create a view file
// // Create files in views folder with .ejs extension
// 4. Render the view file
// 5. Pass data to the view file
// 6. Use template tags to display data













// Register view engine
// app.set('view engine', 'ejs');

// Set the views directory
// app.set('views', 'views');
// Q: What is the default views directory?






// 4. Render the view file
// app.get('/', (req, res) => {
//     res.render('index');
// });



// Q: create routes for about, contact, students






// 5. Pass data to the view file
// Q: Set the title for all the pages 
// and pass it as variable


// HandsOn: Write a for loop in the view file to display the numbers from 1 to 10




// Q: Create a list of students and pass it to the view file of students page
// Q: Display the list of students in the view file of students page


// Q: Create an array of student object {fname, lname} and pass it to the view file of students page

// HW: Add an else statement when the student list is empty




// HW: In the about page, create an array of object:
// {fname, lname, short bio, linkedIn url, github url}








// <div>
//     <h3>Here is the list of all the students: </h3>
//     <ul>
//     <% students.forEach(student => { %>
//     <li><%= student %></li>
//     <% }) %>
//     </ul>
// </div>


