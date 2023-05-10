const AsyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registerUser = AsyncHandler(async (req, res) => {
    // destructure the data from the body
    const {
        name,
        email,
        password
    } = req.body;
    // check if user already exists
    const checkUser = await User.findOne({
        email
    });
    if (checkUser) {
        res.status(400);
        throw new Error('User already exists');
    }
    // genratate salt
    const salt = await bcrypt.genSalt(10)
    // hash the password
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    res.status(200).json({
        id:newUser._id,name,email,password:hashedPassword,token:generateToken(newUser._id)
    })
})
const loginUser = (req, res) => {
    res.status(200).json({
        message: 'login userr'
    })
}
const getUser = (req, res) => {
    res.status(200).json({
        message: 'get Me'
    })
}


const generateToken = (id) => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
}