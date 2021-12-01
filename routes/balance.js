const express = require('express');
const route = express.Router();
const getAccountBalance = require('../controller/balance');

route.get('/:id', async (req, res) => {
    try {
        await getAccountBalance(req, res);
    } catch (e) {
        res.status(400).send(e.message)
    }
})


module.exports = route;