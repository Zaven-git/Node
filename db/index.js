const mongoose = require("mongoose");

module.exports = function () {
    mongoose.connect('mongodb://localhost')
        .then(() => console.log('connected to DB'))
        .catch(err => console.log(err.message))
}
