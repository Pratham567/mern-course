/* 

Exercise 1: Create and Save a Document
Create a Schema: Define a schema for a Product collection with fields: name (String, required), price (Number, required), and inStock (Boolean, default: true).
Create a Model: Create a model for the Product collection.
Save a Document: Create and save a new product document with the following details:
name: Laptop
price: 999.99
inStock: true
Exercise 2: Find Documents
Find All Products: Write a query to find all products in the Product collection.
Find by Name: Write a query to find a product by its name.
Exercise 3: Update Documents
Update by ID: Write a query to update the price of a product with a specific _id.
Update by Name: Write a query to update the inStock status of a product with a specific name.
Exercise 4: Delete Documents
Delete by ID: Write a query to delete a product by its _id.
Delete by Name: Write a query to delete a product by its name.

*/





// Solutions
/* 

Exercise 1: Create and Save a Document
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true }
});

const Product = mongoose.model('Product', productSchema);

const newProduct = new Product({
    name: 'Laptop',
    price: 999.99,
    inStock: true
});

newProduct.save()
    .then(product => console.log('Product saved:', product))
    .catch(err => console.error('Error saving product:', err));




Exercise 2: Find Documents
// Find All Products
Product.find()
    .then(products => console.log('All Products:', products))
    .catch(err => console.error('Error finding products:', err));

// Find by Name
Product.findOne({ name: 'Laptop' })
    .then(product => console.log('Product found by name:', product))
    .catch(err => console.error('Error finding product by name:', err));


Exercise 3: Update Documents
const productId = 'someObjectId';

// Update by ID
Product.findByIdAndUpdate(productId, { price: 899.99 }, { new: true })
    .then(updatedProduct => console.log('Updated Product by ID:', updatedProduct))
    .catch(err => console.error('Error updating product by ID:', err));

// Update by Name
Product.findOneAndUpdate({ name: 'Laptop' }, { inStock: false }, { new: true })
    .then(updatedProduct => console.log('Updated Product by Name:', updatedProduct))
    .catch(err => console.error('Error updating product by name:', err));

    

Exercise 4: Delete Documents
// Delete by ID
Product.findByIdAndDelete(productId)
    .then(deletedProduct => console.log('Deleted Product by ID:', deletedProduct))
    .catch(err => console.error('Error deleting product by ID:', err));

// Delete by Name
Product.findOneAndDelete({ name: 'Laptop' })
    .then(deletedProduct => console.log('Deleted Product by Name:', deletedProduct))
    .catch(err => console.error('Error deleting product by name:', err));
*/