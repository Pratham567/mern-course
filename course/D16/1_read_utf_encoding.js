
const fs = require('fs');


// // Encoding
// binary -> 0s and 1s -> stored in the storage
// hexadecimal -> programs represent binary in hexadecimal
// utf8 -> 8-bit Unicode Transformation Format

const existingFileName = './files/existing_file.txt';
// Read file
fs.readFile(existingFileName, 'utf8' ,(err, data) => {
    console.log("Inside the callback function");
    if (err) {
        console.log("error", err);
        console.log(err.name);
        console.log(err.message);
    } else {
        console.log("Data: ", data);
    }
});


// Add encoding option as second argument -> 'utf8'
