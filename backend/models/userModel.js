const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please enter your name']
    },
    email: {
        type: String,
        required: [true,'Please enter your Email']
    },
    password: {
        type: String,
        required: [true,'Please enter your password']
    }
})

module.exports = mongoose.model('User', userSchema);