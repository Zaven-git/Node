const express = require('express');
const route = express.Router();
const getTransactionById = require('../controller/transaction');

route.get('/:id', async (req, res) => {
    try {
        await getTransactionById(req,res);
    } catch (e) {
        res.status(400).send(e.message)
    }
})


module.exports = route;