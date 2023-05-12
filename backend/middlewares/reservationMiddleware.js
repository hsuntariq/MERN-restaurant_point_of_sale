const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const AsyncHandler = require('express-async-handler');

const TableMiddlerware = AsyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            let decode = jwt.verify(token,process.env.JWT_SECRET);
            req.user = await User.findById(decode.id);
            next();
        } catch (error) {
            res.status(401);
            throw new Error('not authorized')
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('no token')
    }
})

module.exports = {TableMiddlerware};