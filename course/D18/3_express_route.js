const express = require('express');


// 1. Create an express server
// 2. start the server (listen for requests)
// 3. Add a route to send a response
// 4. Send an html file





// create an express server
const app = express();

// listen for requests
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


// // Add a route handler
app.get('/', (req, res) => {
    res.send('<p>Home Page</p>');
    // Q: Check the network tag in the browser
}
);



// Q: Add a new route for about page
// Q: Add a new route for contact page
// Q: What if we add a route that does not exist?













// Q: Send an html file instead
// res.sendFile(indexFileName, { root: __dirname });
// No need to use fs module
// Path Module ??
// HW: complete using PATH module and achieve the same result








// Q: Add a navigation bar to the html file
// Q: Add a link to the about page
// Q: Add a link to the contact page
// Q: Add a link to the home page
// // html code
// <nav>
//     <a href="/">Home</a>
//     <a href="/about">About</a>
//     <a href="/contact">Contact</a>
// </nav>



