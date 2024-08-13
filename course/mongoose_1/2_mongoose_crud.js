// Gather information about the database
const mongoose = require('mongoose');
const USER_NAME = 'mituser';
const PASSWORD = 'mitpassword';
const DB_NAME = 'merndb';
const dbURI = `mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster.xtjdu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=mernMongoose`;


// Connect to the database using mongoose
mongoose.connect(dbURI)
    .then((result) => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.log(err);
    });












// 1. Create a schema for the blog post
const Schema = mongoose.Schema;
// What does it return? -> class
// constructor arguments: object, option object
// Blogpost
// title, summary, author, content, dateCreated, id
const blogPostSchema = new Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true }
}, { timestamps: true });

// 2. Create a model for the blog post
// 2.1 define the collection name (plural)
// mongoose.model() -> returns a class which represents a collection
// arguments -> modelName, schema, collectionName
const BlogPost = mongoose.model('blog', blogPostSchema, 'blogposts');
// typeof BlogPost -> function(class)

// Q: What is the purpose of the Schema class?
// What does {timestamps: true} do ? 
// adds createdAt and updatedAt fields

// HW: Can we make schema of nested objects? How?

// What is the return value of the model method?
// Can I specify a custom collection name for the model?
// How can I specify a custom collection name for the model?

// Can I use the same schema for multiple models?
// What is the purpose of the model function in mongoose?
// To create a model class for the document

// 3. CRUD operations
// 3.0 Create a new blog post (document)
// 3.1 Save the blog post to the database

// const newBlog = new BlogPost({
//     title: 'First Post',
//     summary: 'Summary',
//     content: 'Content',
//     author: 'Pratham Gupta'
// });
// newBlog.save()
//     .then((result) => {
//         console.log("Saving the blog post");
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log("Error saving the blog post");
//         console.log(err);
//     });
// console.log("Post saving the blog post");


// Q: What is the return value of the save method? -> Promise





// 3.2 Fetch all the blog posts
// async operation
// What is the return value of the find method promise? -> array of objects
// console.log("Fetching all blog posts");

// BlogPost.find()
//     .then( (result) => {
//         console.log("All blog posts");
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log("Error fetching all blog posts");
//     });











// 3.3 Fetch a single blog post
// console.log("Fetching a single blog post");
// BlogPost.findById("66bb2d582e78675b4a509cbe")
//     .then((result) => {
//         console.log("Single blog post");
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log("Error fetching single blog post");
//     });







// HW: Search using query
// BlogPost.find({ title: 'First Post' })








// 3.4 Update a blog post
// console.log("Updating a blog post");
// BlogPost.findOneAndUpdate
BlogPost.findByIdAndUpdate("<><><><>", { title: "Updated Title 2" }, { new: true })
    .then((result) => {
        console.log("Updated blog post");
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });


// Q: findByIdAndDelete




// HW: Q: Can I update multiple fields?
// what does {new: true} mean?
// returns the updated document
// what does {new: false} mean?
// returns the original document












// 3.5 Delete a blog post
// console.log("Deleting a blog post");










// // What is Mongoose?
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
// // What is the return value of the find method? -> Promise
// // What is the return value of the save method? -> Promise
// // What is the return value of the findById method? -> Promise
// // What is the return value of the findByIdAndUpdate method? -> Promise
// // What is the return value of the findByIdAndDelete method? -> Promise


// Sort the blog posts by dateCreated DESC
// BlogPost.find().sort({ dateCreated: -1 }) -> Promise

// Why is the app not closing after the operations?
setTimeout(() => {
    console.log("Closing the connection");
    mongoose.connection.close();
}, 10000);
