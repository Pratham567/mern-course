const express = require('express');
const app = express();
const port = 3040;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Init
const students = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jane', age: 22 },
    { id: 3, name: 'Tom', age: 21 },
];

app.set('view engine', 'ejs');

app.use(express.static('public')); // folder name

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/students', (req, res) => {
    res.render('students', { title: 'Students', students });
});


// GET /students/1 -> { id: 1, name: 'John', age: 20 }
// Create a function that returns the student with the given id
function getStudentById(id) {
    return students.find(s => s.id === id);
}

// // Create a function that returns the student with the given name
function getStudentByName(name) {
    return students.find(s => s.name === name);
}
// Read the path parameter and return the student with the given id
app.get('/students/:id', (req, res) => {
    const idFromPathParam = parseInt(req.params.id);
    const student = getStudentById(idFromPathParam);
    if (!student) {
        res.status(404).send('The student with the given ID was not found');
    }
    res.send(student);
});


/*
const server = http.createServer( (req, res) => {
    console.log('Request received');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(responseObj));
});
*/







// { id: 1, name: 'John', age: 20 }
// 1. Create a function that saves the new student
function addStudent(student) {
    students.push(student);
}



// 2. Create a POST API which reads the body and console.log it
let middlewareFunc1 = express.json();
// app.use(middlewareFunc1);
app.post('/students', (req, res) => {
    const obj = req.body;
    console.log(obj);
    addStudent(obj);
    res.send("The data has been saved");
} );



// any new middleware to parse the body?

// 3. Create a POST API which reads the body and saves the new student










// Q: Why is it important to use express.json() middleware?
// Q: What is the status code of the response?
// Q: What is the Content-Type of the response?
// Q: What happens if we add same student again?
// Q: How can we prevent adding the same student again?


// HW: Create a POST API which reads the body and 
// saves the new student only if it does not exist by name













































// // 4. Create a POST API which reads the body and saves the new student only if it does not exist
// app.post('/students', (req, res) => {
//     const student = req.body;
//     const existingStudent = getStudentByName(student.name);
//     if (existingStudent) {
//         res.status(400).send('The student already exists');
//         return;
//     }
//     addStudent(student);
//     res.send(student);
// });