const express = require('express');
const app = express();
const port = 3040;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.set('view engine', 'ejs');


app.use(express.static('public')); // folder name

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/favicon.ico_1', (req, res) => {
    console.log("This is favicon.ico request");
    res.sendStatus(204);
});







// 1. Create a partials directory in the views directory
// 2. Create partials for head, nav, footer
// 3. include the partials in the index.ejs file, and other files