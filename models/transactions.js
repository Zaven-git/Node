const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    account_id: {
        type: String,
        required: true,
    },
    transaction: {
        type: String,
    },
})

module.exports = mongoose.model('Transaction', Schema,'transactions');