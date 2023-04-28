const Food = require("../models/foodModel");
const AsyncHandler = require('express-async-handler')
const getFood = AsyncHandler(async(req, res) => {
    const food = await Food.find().sort({_id:-1});
    res.status(200).json(food);
});
const getSingleItem = AsyncHandler(async(req, res) => {
    const id = req.params.id;
    const food = await Food.find({_id:id});
    res.status(200).json(food);
});

const postFood =AsyncHandler(async(req, res) => {
    if (!req.body.name || !req.body.price || !req.body.info) {
        res.status(400);
        throw new Error('please fill out all the fields')
    }
    // get the info from the body
    const { name, price, info, imageURL } = req.body;
    const food = await Food.create({
        name, price, info, imageURL
    });
    res.status(200).json(food);
});

const updateFood = async(req, res) => {
    const findFood = await Food.findById(req.params.id);
    if (!findFood) {
        res.status(404);
        throw new Error('no item with the given id');
    }
    const updatedItem = await Food.findByIdAndUpdate(findFood, req.body, {
        new: true,
    });
    res.status(200).json(updatedItem);
};
const deleteFood = AsyncHandler(async(req, res) => {
    const findFood = await Food.findById(req.params.id);
    if (!findFood) {
        res.status(404);
        throw new Error('id does not exist');
    }
    await findFood.deleteOne();
    res.status(200).json({
        _id: findFood._id,
    })
});



module.exports = {
    getFood,
    postFood,
    updateFood,
    deleteFood,
    getSingleItem,
}