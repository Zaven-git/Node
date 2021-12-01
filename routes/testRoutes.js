const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    try {
        res.send('The service is up and running.')
    } catch (err) {
        console.log(err)
    }
})

module.exports = route;