const express = require('express');
const route = express.Router();
const getMaxTransactionCount = require('../controller/max_transaction_volume');

route.get('/', async (req, res) => {
    try {
        await getMaxTransactionCount(req,res)
    } catch (e) {
        res.status(400).send(e.message)
    }
})


module.exports = route;