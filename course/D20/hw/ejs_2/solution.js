// // 1
// app.get('/products', (req, res) => {
//     const products = [
//         { name: 'Product 1', price: 100, quantity: 2 },
//         { name: 'Product 2', price: 200, quantity: 5 },
//         // Add more products as needed
//     ];
//     res.render('products', { products });
// });


// // 2
// app.get('/categories', (req, res) => {
//     const categories = [
//         { name: 'Fruits', items: ['Apple', 'Banana', 'Orange'] },
//         { name: 'Vegetables', items: ['Carrot', 'Broccoli', 'Spinach'] },
//         // Add more categories as needed
//     ];
//     res.render('categories', { categories });
// });


// // 3
// app.get('/pagination', (req, res) => {
//     const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
//     const currentPage = parseInt(req.query.page) || 1;
//     const totalPages = 3; // Example total pages
//     res.render('pagination', { items, currentPage, totalPages });
// });

// // 4
// app.get('/tasks', (req, res) => {
//     const tasks = [
//         { title: 'Task 1', completed: true },
//         { title: 'Task 2', completed: false },
//         // Add more tasks as needed
//     ];
//     res.render('tasks', { tasks });
// });

// // 5
// app.get('/edit-user', (req, res) => {
//     const user = { name: 'John Doe', email: 'john@example.com', age: 30 };
//     res.render('edit-user', { user });
// });

// // 6
// app.get('/login', (req, res) => {
//     res.render('login', { error: null });
// });

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     if (username === 'admin' && password === 'password') {
//         res.send('Login successful');
//     } else {
//         res.render('login', { error: 'Invalid username or password' });
//     }
// });


// // 7
// app.get('/gallery', (req, res) => {
//     const images = [
//         'https://via.placeholder.com/100',
//         'https://via.placeholder.com/100',
//         // Add more image URLs as needed
//     ];
//     res.render('gallery', { images });
// });

// // 8
// app.get('/dropdown', (req, res) => {
//     const options = [
//         { value: '1', text: 'Option 1' },
//         { value: '2', text: 'Option 2' },
//         // Add more options as needed
//     ];
//     res.render('dropdown', { options });
// });

// // 9
// app.get('/links', (req, res) => {
//     const links = [
//         { text: 'Google', url: 'https://www.google.com' },
//         { text: 'Facebook', url: 'https://www.facebook.com' },
//         // Add more links as needed
//     ];
//     res.render('links', { links });
// });

// // 10
// app.get('/profile', (req, res) => {
//     const user = {
//         name: 'John Doe',
//         email: 'john@example.com',
//         bio: 'Software Developer',
//         profilePicture: 'https://via.placeholder.com/150'
//     };
//     res.render('profile', { user });
// });

