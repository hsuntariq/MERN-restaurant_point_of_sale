const express = require('express');
const { getFood, deleteFood, updateFood, postFood } = require('../controller/foodController');
const router = express.Router();

router.get('/', getFood);
router.post('/', postFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);


module.exports = router;