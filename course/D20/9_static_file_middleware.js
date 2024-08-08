// By default express does not serve static files.
// We need to use middleware to serve static files.

// To serve static files such as images, CSS files, and JavaScript files, 
// we use the express.static built-in middleware function in Express.


// Q: If we try to access the styles.css in any ejs file, what will happen?
// <link rel="stylesheet" href="styles.css" />
// inspect it from the browser.






// Solution: expose a folder to the browser









// app.use(express.static('public')); // folder name

// Q: try to access the file from the browser
// localhost:3000/styles.css

// Q: Can we place images, text files, script files ?