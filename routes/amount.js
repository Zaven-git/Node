const express = require('express');
const route = express.Router();
const createTransaction = require('../controller/amount');

route.post('/', async (req, res) => {
    try {
        await createTransaction(req,res);
    } catch (ex) {
        res.send(ex.message);
    }
}).all('/', (req, res, next) => {
    res.status(405).send('Specified HTTP method not allowed.')
});

module.exports = route;