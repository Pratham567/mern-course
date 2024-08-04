// Core Module: File System

const fs = require('fs');
// const { readFile } = require('fs');

const existingFileName = './files/existing_file.txt';
// Read file
fs.readFile(existingFileName, (err, data) => {
    console.log("Inside the callback function");
    if (err) {
        console.log("error", err);
        // console.log(err.name);
        // console.log(err.message);
    } else {
        console.log("Data: ")
        console.log(data);
        console.log(data.toString());
    }
});
console.log(__dirname);
console.log("After reading the file");

// Q: Write the above callback function separately?
// Is the above method asynchronous or synchronous?
// console.log('Hello');



















// Write file
// Case 1: File already exists
// Case 2: File does not exist

// const content = 'Hello from Node.js again.';
// const fileName = './files/new_file.txt';
// fs.writeFile(fileName, content, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File written successfully');
//     }
// });









// Directories
// Create directory
// const newDirName = './files/new_directory';
// fs.mkdir(newDirName, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Directory created successfully');
//     }
// });

// Q: What if the directory already exists?








// Error handling: using existsSync
// (fs.existsSync('newDirName)) ? console.log('Directory exists') : console.log('Directory does not exist');


// Q: Write a program to create a directory if it does not exist?




// Delete directory
// fs.rmdir('newDirName, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Directory deleted successfully');
//     }
// });

// Q: What if the directory does not exist?

// Q: Write a program to delete a directory if it exists?








// Q: Write a function to create a directory, if it does not exist,
// and delete it if it exists?









// // Delete file
// check if file exists
// const newFileName = './files/new_file.txt';
// fs.existsSync(newFileName) ? console.log('File exists') : console.log('File does not exist');


// fs.unlink(newFileName, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File deleted successfully');
//     }
// });


// HW: Read about the difference between fs.exists and fs.existsSync from MDN?