const express = require('express');
const { getFood, deleteFood, updateFood, postFood,getSingleItem } = require('../controller/foodController');
const router = express.Router();

router.get('/', getFood);
router.get('/single-item/:id', getSingleItem);
router.post('/', postFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);


module.exports = router;