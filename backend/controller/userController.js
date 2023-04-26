const registerUser = (req, res) => {
    res.status(200).json({
        message:'register userr'
    })
}
const loginUser = (req, res) => {
    res.status(200).json({
        message:'login userr'
    })
}
const getUser = (req, res) => {
    res.status(200).json({
        message:'get Me'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
}