const express = require('express');

// 1. Create a router
const router = express.Router();

// 2. Define the routes
router.get('/', (req, res) => {
    res.send("All Students");
});
router.get('/new', (req, res) => {
    res.send("New Student");
});
router.get('/:id', (req, res) => {
    res.send(`Student with id: ${req.params.id}`);
});
router.post('/', (req, res) => {
    res.send("Create Student");
});
// 3. Export the router
module.exports = router;