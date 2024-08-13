/*

Exercise 1: Create and Save a Document
Create a Schema: Define a schema for a User collection with fields: username (String, required, unique), email (String, required, unique), and password (String, required).
Create a Model: Create a model for the User collection.
Save a Document: Create and save a new user document with the following details:
username: john_doe
email: john@example.com
password: securepassword
Exercise 2: Find Documents
Find All Users: Write a query to find all users in the User collection.
Find by Username: Write a query to find a user by their username.
Find by Email: Write a query to find a user by their email.
Exercise 3: Update Documents
Update by ID: Write a query to update the email of a user with a specific _id.
Update by Username: Write a query to update the password of a user with a specific username.
Return Updated Document: Ensure that the updated document is returned after the update.
Exercise 4: Delete Documents
Delete by ID: Write a query to delete a user by their _id.
Delete by Username: Write a query to delete a user by their username.
Exercise 5: Advanced Queries
Find and Sort: Write a query to find all users and sort them by username in ascending order.
OPTIONAL: Find with Conditions: Write a query to find all users whose username starts with the letter 'j'.
OPTIONAL: Pagination: Write a query to find users with pagination (e.g., limit the results to 5 users per page and skip the first 5 users).

Exercise 7: Validation and Middleware
Schema Validation: Add validation to the User schema to ensure that the password is at least 8 characters long.
Pre-save Middleware: Add a pre-save middleware to hash the user's password before saving it to the database.
Exercise 8: Virtuals and Methods
Virtual Field: Add a virtual field to the User schema that returns the user's email domain.
Instance Method: Add an instance method to the User schema to check if a given password matches the hashed password.

*/


// Solutions
/* 

Exercise 1: Create and Save a Document
const mongoose = require('mongoose');

mongoose.connect(<<URL>>)
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Error connecting to the database:', err));

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const newUser = new User({
    username: 'john_doe',
    email: 'john@example.com',
    password: 'securepassword'
});

newUser.save()
    .then(user => console.log('User saved:', user))
    .catch(err => console.error('Error saving user:', err));

Exercise 2: Find Documents
// Find All Users
User.find()
    .then(users => console.log('All Users:', users))
    .catch(err => console.error('Error finding users:', err));

// Find by Username
User.findOne({ username: 'john_doe' })
    .then(user => console.log('User found by username:', user))
    .catch(err => console.error('Error finding user by username:', err));

// Find by Email
User.findOne({ email: 'john@example.com' })
    .then(user => console.log('User found by email:', user))
    .catch(err => console.error('Error finding user by email:', err));


Exercise 3: Update Documents
const userId = 'someObjectId';

// Update by ID
User.findByIdAndUpdate(userId, { email: 'newemail@example.com' }, { new: true })
    .then(updatedUser => console.log('Updated User by ID:', updatedUser))
    .catch(err => console.error('Error updating user by ID:', err));

// Update by Username
User.findOneAndUpdate({ username: 'john_doe' }, { password: 'newsecurepassword' }, { new: true })
    .then(updatedUser => console.log('Updated User by Username:', updatedUser))
    .catch(err => console.error('Error updating user by username:', err));


Exercise 4: Delete Documents
// Delete by ID
User.findByIdAndDelete(userId)
    .then(deletedUser => console.log('Deleted User by ID:', deletedUser))
    .catch(err => console.error('Error deleting user by ID:', err));

// Delete by Username
User.findOneAndDelete({ username: 'john_doe' })
    .then(deletedUser => console.log('Deleted User by Username:', deletedUser))
    .catch(err => console.error('Error deleting user by username:', err));


Exercise 5: Advanced Queries
// Find and Sort
User.find().sort({ username: 1 })
    .then(users => console.log('Users sorted by username:', users))
    .catch(err => console.error('Error sorting users:', err));

// Find with Conditions
User.find({ username: /^j/ })
    .then(users => console.log('Users with username starting with "j":', users))
    .catch(err => console.error('Error finding users:', err));

// Pagination
User.find().limit(5).skip(5)
    .then(users => console.log('Users with pagination:', users))
    .catch(err => console.error('Error with pagination:', err));



Exercise 7: Validation and Middleware
// Schema Validation
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 }
});

// Pre-save Middleware
userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    // Hash the password (using bcrypt for example)
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});


Exercise 8: Virtuals and Methods
// Virtual Field
userSchema.virtual('emailDomain').get(function() {
    return this.email.split('@')[1];
});

// Instance Method
userSchema.methods.checkPassword = function(password) {
    return bcrypt.compare(password, this.password);
};


*/