const getFood = (req, res) => {
    res.status(200).json({
        message: 'get food'
    });
};

const postFood = (req, res) => {
    res.status(200).json({
        message: 'post food'
    });
};

const updateFood = (req, res) => {
    res.status(200).json({
        message: `food with id ${req.params,id} updated`
    });
};
const deleteFood = (req, res) => {
    res.status(200).json({
        message: `food with id ${req.params,id} deleted`
    });
};



module.exports = {
    getFood,
    postFood,
    updateFood,
    deleteFood
}