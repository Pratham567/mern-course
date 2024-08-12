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


// Create a function that saves the new student
function addStudent(student) {
    students.push(student);
}

app.use(express.json());

app.post('/students', (req, res) => {
    const student = req.body;
    const existingStudent = getStudentByName(student.name);
    if (existingStudent) {
        res.status(400).send('The student already exists');
        return;
    }
    addStudent(student);
    res.send(student);
});


// 1. Create a function that deletes the student with the given id
function deleteStudentById(id) {
    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
        return;
    }
    students.splice(index, 1);
}

// 2. Create a function that deletes the student with the given name

// app.use('/students/id_1/:id', (req, res) => {
app.use('/students/id/:id', (req, res) => {
    res.status(404).render('error', { title: 'Error' });
});

// 3. Create a DELETE API which reads the path parameter and console.log it
app.delete('/students/id_2/:id', (req, res) => { 
    console.log("This is the delete handler");
    const idOfStudent = req.params.id;
    const intId = parseInt(idOfStudent);
    console.log("intId", intId);
    deleteStudentById(intId);
    res.send(`The student with id ${intId} was deleted if it existed`);
} );

// 4. Create a DELETE API which reads the path parameter and deletes the student with the given id

// 5. Create a DELETE API which reads the path parameter and deletes the student with the given name

// HW: Add a validation on delete if the student does not exist





























// // 1. Create a function that deletes the student with the given id
// function deleteStudentById(id) {
//     const index = students.findIndex(s => s.id === id);
//     if (index === -1) {
//         return;
//     }
//     students.splice(index, 1);
// }

// // 2. Create a function that deletes the student with the given name
// function deleteStudentByName(name) {
//     const index = students.findIndex(s => s.name === name);
//     if (index === -1) {
//         console.log(`Student with name ${name} does not exist`);
//         return;
//     }
//     console.log(`Delete student with name: ${name}`);
//     students.splice(index, 1);
// }


// // 3. Create a DELETE API which reads the path parameter and console.log it
// app.delete('/students/id/:id', (req, res) => {
//     const idFromPathParam = parseInt(req.params.id);
//     console.log(`Delete student with id: ${idFromPathParam}`);
//     res.send(`The student with id ${idFromPathParam} was deleted if it existed`);
// });

// // 4. Create a DELETE API which reads the path parameter and deletes the student with the given id
// app.delete('/students/id/:id', (req, res) => {
//     const idFromPathParam = parseInt(req.params.id);
//     deleteStudentById(idFromPathParam);
//     res.send(`The student with id ${idFromPathParam} was deleted if it existed`);
// });

// // 5. Create a DELETE API which reads the path parameter and deletes the student with the given name
// app.delete('/students/name/:name', (req, res) => {
//     const nameFromPathParam = req.params.name;
//     deleteStudentByName(nameFromPathParam);
//     res.send('OK');
// });