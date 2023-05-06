const mongoose = require('mongoose');
const table = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        default:null,
    },
    date: {
        type: Date,
        required:[true,'please enter the data']
    },
    time: {
        type: String,
        required: [true,'Please enter time']
    }
})

module.exports = mongoose.model('table', tableSchema);