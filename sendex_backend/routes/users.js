// In separate files (e.g., routes/auth.js, routes/orders.js, routes/users.js)

// Example route: User.js
const express = require('express');
const router = express.Router();

// Import required models (User, Order, Review)


const User = require('../models/user');

// Example route: Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//
router.post('/users', async (req, res) => {
    try {
        const {name, email, password} = res.body;
        if (!name || !email || !password){
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newUser = new User({
            name,
            email,
            password
        });

        const savedUser = newUser.save();

        //return a success response
        res.status(201).json(savedUser);
        
    } catch (error) {
        // Return error response
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
}
});




// Define authentication routes (signup, login)

module.exports = router;

// Repeat the same for other routes (orders, users, etc.)
