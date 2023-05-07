const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const AsyncHandler = require('express-async-handler');

const ReserveTable = AsyncHandler(async(err, req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            let decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findOne(decode.id)
        } catch (error) {
            res.status(400);
            throw new Error('not authorized')
        }
    }
    if (!token) {
        res.status(400);
        throw new Error('no token found')
    }
});

module.exports = ReserveTable