const express = require('express');

// 1. Create an express server
// 2. start the server (listen for requests)
// 3. Add a route to send a response
// 4. Send an html file
// 5. Redirect to another route
// 6. Add a default error page






// create an express server
const app = express();

// listen for requests
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


// // Add a route
app.get('/', (req, res) => {
    res.send('<p>Home Page</p>');
}
);


// Add a route for about page
app.get('/about', (req, res) => {
    res.send('<p>About Page</p>');
}
);





// // Add a redirect route for aboutme
// app.get('/aboutme', (req, res) => {
//     res.redirect('/about');
// }
// );





// // Add a route for default error page
// app.use((req, res) => {
//     res.sendFile('./views/error.html', { root: __dirname });
//     // Q: What is the status code?
// }
// );


// Q: What is the use() method? -> middleware function
// use() is fired for every request, as long as it reaches here

// Q: What will happen if I move the use() above the about route?



