
const fs = require('fs');

// // ReadStream
// const fileName = './files/large_file.txt';
// const readStream = fs.createReadStream(fileName, {encoding: 'utf8'});
// let counter = 0;
// readStream.on('data', (chunk) => {
//     console.log('\n\n*********************New chunk received:*********************');
//     console.log(chunk);
//     console.log("counter:", ++counter);
// });

// { encoding: 'utf8', highWaterMark: 1024 }

// Q: using readStream, read a file and display in utf8







// Q: Can we use the encoding utf8 option with ReadStream?







// WriteStream
// const writeFile = './files/write_file.txt';
// const writeStream = fs.createWriteStream(writeFile);
// writeStream.write('Hello, this is a write stream.\n');
// writeStream.write('Hello, this is another line.\n');
// writeStream.write('Hello, this is another line 3.\n');
// writeStream.write('Hello, this is another line 4.\n');
// writeStream.write('Hello, this is another line 5.\n');



// Q: write a function to read from a large file (using readStream), 
// and write to another using writeStream

const fileName = './files/large_file.txt';
const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream('./files/write_file_new.txt');
let counter = 0;
readStream.on('data', (chunk) => {
    console.log('\n\n*********************New chunk received:*********************');
    console.log(chunk);
    writeStream.write(chunk);
    console.log("counter:", ++counter);
});

// HW: create a writeStream, 
// which does not overwrite the data on first time?



// Q: Write a function to read from a file and write to a new file.

// Q: What if we create a writeStream inside the readStream callback?

// Q: What if we write the buffer format to a file, and then open in the editor?






// // Pipe
// const fileName = './files/large_file.txt';
// const readStream = fs.createReadStream(fileName, {encoding: 'utf8'});
// const writeStream = fs.createWriteStream('./files/write_file_new.txt');
// readStream.pipe(writeStream);






// readStream.pipe(writeStream);
