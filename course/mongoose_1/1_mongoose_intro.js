// Mongoose intro
// Schema -> Model -> Document
// Schema: Defines the structure of the document
// Model: Special class to interact with the database, represents a collection
// Each object we create using the model represents a document in the collection
// Document: An instance of the model, an entry in the collection







// In Mongo Atlab UI:
// Create a Cluster
// Create username and Password for access
// Allow network Access
// Get the connection String
















// // What is Mongoose?
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 
// Defininition -> It manages relationships between data, provides schema validation, 
// and is used to translate between objects in code and the representation of those objects in MongoDB.

// Created an object model and provides easy methods to interact with the database -> CRUD operations
// It wraps up the collection and provides simple methods to interact with the database



// Gather information about the database
const mongoose = require('mongoose');
const USER_NAME = 'mituser';
const PASSWORD = 'mitpassword';
const DB_NAME = 'merndb';
const dbURI = `mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster.xtjdu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=mernMongoose`;


mongoose.connect(dbURI)
    .then((result) => {
        console.log("Connected to the DB");
    })
    .catch((err) => {
        console.log(err);
    });

console.log("Post connecting to the DB");

// Q: What is the return value of the connect method? -> promise
// Q: Why did the app not close after some time automatically?


mongoose.connection.close();
// Why is the app not closing after the operations?
