const app = require('../lib/app');
const amount = require("./amount");
const transaction = require("./transaction");
const balance = require("./balance");
const max_transaction_volume = require("./max_transaction_volume");
const ping = require("./testRoutes");
const contentType = require('../middlewares/contentType');

module.exports = function () {
    app.use('/api', contentType, amount);
    app.use('/api/transaction', transaction);
    app.use('/api/balance', balance);
    app.use('/api/max_transaction_volume', max_transaction_volume);
    app.get("/api/ping", ping)
}

