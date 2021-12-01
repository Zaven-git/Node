const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    account_id: {
        type: String,
        match:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    transaction_id: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Amount', Schema,'amount');