const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter the dish name'],
    },
    price:{
        type:mongoose.Types.Decimal128,
        required:[true,'please enter the dish name'],
    },
    info: {
        type: String,
        required:[true,'please enter the dish info']
    },
    imageURL: {
        type: String,
        required: false,
        default: 'https://cdn-icons-png.flaticon.com/512/1377/1377194.png',
    },
})

module.exports = mongoose.model('Food', foodSchema);