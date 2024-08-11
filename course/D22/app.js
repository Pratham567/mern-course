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