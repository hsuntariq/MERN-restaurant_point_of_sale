const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser } = require('../controller/userController');
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getUser', getUser);

module.exports = router;