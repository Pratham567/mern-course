// 1 Week Creds
// mituser/mitpassword

// Create a Cluster
// Create username and Password for access
// Allow network Access
// Get the connection String


// // What is Mongoose?
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 
// Defninition -> It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
// Created an object model and provides easy methods to interact with the database -> CRUD operations
// It wraps up the collection and provides simple methods to interact with the database

// Connect to the database using mongoose
const mongoose = require('mongoose');
const USER_NAME = 'mituser';
const PASSWORD = 'mitpassword';
const DB_NAME = 'merndb';
const dbURI = `mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster.xtjdu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=mernMongoose`;

// async operation
mongoose.connect(dbURI)
    .then((result) => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.log(err);
    });


// Create a schema for the blog post
const Schema = mongoose.Schema; // returns a class

const blogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Option object
// timestamps: true -> adds createdAt and updatedAt fields

// Create a model for the blog post
const BlogPost = mongoose.model('merndb', blogPostSchema);


// Create a new blog post (document)
const blogPost = new BlogPost({
    title: 'First Post',
    summary: 'This is the first post',
    content: 'This is the content of the first post',
    author: 'Mosh'
});

// Save the blog post to the database
// async operation
// What is the return value of the save method? -> Promise
console.log("Saving the blog post");
blogPost.save()
    .then((result) => {
        console.log("Saved the blog post");
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

// Fetch all the blog posts
// async operation
// What is the return value of the find method? -> array of objects
console.log("Fetching all blog posts");
BlogPost.find()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

// Fetch a single blog post
console.log("Fetching a single blog post");
const objId = '60e2d0b9e0f7b92f5c3d6f8f';
BlogPost.findById(objId)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });


// Update a blog post
console.log("Updating a blog post");
const objIdToUpdate = '60e2d0b9e0f7b92f5c3d6f8f';
BlogPost.findByIdAndUpdate(objIdToUpdate, { title: 'Updated Post' }, { new: true })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });



// Delete a blog post
console.log("Deleting a blog post");
const objIdToDelete = '60e2d0b9e0f7b92f5c3d6f8f';
BlogPost.findByIdAndDelete(objIdToDelete)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

// // What is Mongoose?
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
// // What is the return value of the find method?
// -> Promise
// // What is the return value of the save method?
// -> Promise
// // What is the return value of the findById method?
//  -> Promise
// // What is the return value of the findByIdAndUpdate method?
// -> Promise
// // What is the return value of the findByIdAndDelete method?
// -> Promise

// Why is the app not closing after the operations?
setTimeout(() => {
    console.log("Closing the connection");
    mongoose.connection.close();
}, 10000);
