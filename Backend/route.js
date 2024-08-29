const express = require('express');
const router = express.Router();
const userController = require('./Controllers/UserController');

// Route for user signup
router.post('/signup', userController.signup);

// Route to get user details by ID
router.get('/user/:id', userController.getUserDetails);

module.exports = router;
