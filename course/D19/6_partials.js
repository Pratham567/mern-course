
// partials -> partials are reusable code snippets that can be used in multiple views
// partials are used to avoid code duplication
// partials are used to create reusable components



const express = require('express');
const app = express();
const port = 3040;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index_1', {titleVar: 'Home'});
});







// 1. Create a partials directory in the views directory
// 2. Create partials for head, nav, footer
// 3. include the partials in the index.ejs file, and other files