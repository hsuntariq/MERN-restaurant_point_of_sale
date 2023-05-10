const AsyncHandler = require('express-async-handler')
const Table = require("../models/tableModel");

const createTable = AsyncHandler(async(req, res) => {
    // get the table data
    const { name, date, time } = req.body;
    const table = await Table.create({
        name, date, time
    });
    res.json(table);
})

const getTables = AsyncHandler(async (req, res) => {
    const tables = await Table.find({user:null});
    res.json(tables)
})

const updateTable = AsyncHandler(async (req, res) => {
    const { date, time } = req.body;
    const updatedTable = await Table.findByIdAndUpdate(req.params.id, {user:req.user.id,date,time}, {
        new:true
    })
    res.json(updatedTable)
})


module.exports = {
    createTable,
    updateTable,
    getTables
}