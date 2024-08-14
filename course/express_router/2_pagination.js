// Connect to the database using mongoose
const mongoose = require('mongoose');
const { createDeflateRaw } = require('zlib');
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

const Schema = mongoose.Schema;

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
}, { timestamps: true });

// Create a model for the blog post
const BlogPost = mongoose.model('blogpost', blogPostSchema);

// Fetch all the blog posts
console.log("Fetching all blog posts");
const limit = 2;
const page = 2;
BlogPost.find()
    .skip(limit * (page - 1))
    .limit(limit)
    .sort({ createdAt: -1 })
    .then((result) => {
        console.log("Fetching all blog posts");
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });


// blog4  >  blog3 > blog2 > blog 1


// 1, 2, 3, 4, 5, 6,7 ,8, 9, 10, 11 .......

// limit = 2
// 1, 2 ,,,  3,4 ,,, 5,6 ,,, 7,8 ,,, 9,10 ,,, 11,12 ,,,,,,,,,,

// page = 1  ---- > 1,2
// page = 2  ---- > 3,4
// page = 3  ---- > 5,6
// ......
// page = 10 ---- > 

// limit = 2, page = 4 (7,8) skip 6th 
// skip 2*(page3) => 2(n-1) = limit*(page-1)






// Q: Using skip and limit, fetch the second and third blog posts only



// Why is the app not closing after the operations?
setTimeout(() => {
    console.log("Closing the connection");
    mongoose.connection.close();
}, 10000);
