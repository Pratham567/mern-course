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


/*
const students = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jane', age: 22 },
    { id: 3, name: 'Tom', age: 21 },
];
*/

// // 1.1 Create a function that returns the student with the given id
function getStudentById(id) {
    return students.find(s => s.id === id);
}
// getStudentById(1); // JohnObject

// // 1.2 Create a function that returns the student with the given name
function getStudentByName(name) {
    return students.find(s => s.name === name);
}

// // Q: What will be the output if id do not exist? -> undefined
// Q What is the boolean value of undefined? -> false



// http://localhost:3040/students/name/John

// // 2. Create an API which reads the path parameter and returns the student with the given id
app.get('/students/id/:id1', (req, res) => {
    const idFromPathVariable = req.params.id1;
    console.log(`idFromPathVariable: ${idFromPathVariable}`);
    // console.log(typeof idFromPathVariable);
    const studentObj = getStudentById(idFromPathVariable); // undefined
    console.log(`studentObj: ${studentObj.name}`);
    res.send(studentObj);
   } );

app.get('/students/name/:name1', (req, res) => {
    const studentNameFromPathVariable = req.params.name1;
    console.log(`studentNameFromPathVariable: ${studentNameFromPathVariable}`);
    // console.log(typeof studentNameFromPathVariable); // string
    const studentObj = getStudentByName(studentNameFromPathVariable);
    res.send(studentObj);
} );

// // Q:
// http://localhost:3040/students/John -> ??
// http://localhost:3040/students/id/abcd -> id, id1-> abcd(string)
// http://localhost:3040/students/id/id -> id, id1-> id(string)
// http://localhost:3040/students/id/123 -> id, id1-> 123(string)
// http://localhost:3040/students/name/1 -> name, name1 -> 1(string)
// http://localhost:3040/students/name/name -> name, name1 -> name(string)


// Q: Error handling?
// Q update the route to handle the case when student is not present
// app.get('/students/id/:id1', (req, res) => {
//     const idFromPathVariable = req.params.id1;
//     console.log(`idFromPathVariable: ${idFromPathVariable}`);
//     // console.log(typeof idFromPathVariable);
//     const studentObj = getStudentById(idFromPathVariable);
//     if(!studentObj){
//         res.status(404).send(`The student with the given ID ${idFromPathVariable} was not found`);
//     }
//     console.log(`studentObj: ${studentObj.name}`);
//     res.send(studentObj);
//    } );

// http://localhost:3040/students/id/3




// Q: why do we need to parse it? - because it is string by default

// // 2.2 -> Read the path parameter and return the student with the given id

// Q: What is the status code of the response?
// Q: What is the Content-Type of the response?
// Q: What will happen if we provide invalid id?







// 3. Create an API which reads the query parameter and returns the student with the given name
// localhost:3040/students/query?id=1
app.get('/students/query', (req, res) => {
    const keyFromQueryParam = req.query.id;
    console.log(keyFromQueryParam);
    //getStudentById(keyFromQueryParam);
} );

//Q: search by name?
// localhost:3040/students/abcd?name=John
// req.query.name


// localhost:3040/students/abcd?name123=John
// req.query.name123


// localhost:3040/students/abcd?id=John
// req.query.id // John
// findStudentById() // undefined


// HW: In the above API, return the student with the given name
// HW: In the above API, return the student with the given id
// HW: Can we send multiple query params? How
// HW: Implement Error Handling



// What is the status code of the response?
// Q: What is the Content-Type of the response?
// Q: What is the difference between path and query parameter?
// Q: What is the difference between req.params and req.query?



// Q: Create postman routes for:
// // /students/id/:id
// // /students/name/:name

// Q: Create postman routes using query parameters:
// // /students/query?id=1




























// 2.2 -> Read the path parameter and return the student with the given id
// app.get('/students/:id', (req, res) => {
//     const idFromPathParam = parseInt(req.params.id);
//     const student = getStudentById(idFromPathParam);
//     if (!student) {
//         res.status(404).send('The student with the given ID was not found');
//     }
//     res.send(student);
// });


// 3. Create an API which reads the query parameter and returns the student with the given name
// app.get('/students', (req, res) => {
//     const studentNameFromQueryParam = req.query.name;
//     console.log(studentNameFromQueryParam);
//     const student = getStudentByName(studentNameFromQueryParam);
//     if (!student) {
//         res.status(404).send('The student with the given name was not found');
//     }
//     res.send(student);
// });


