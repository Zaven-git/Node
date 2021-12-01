const Joi = require("joi");
const Amount = require("../models/amount");
const Transactions = require("../models/transactions");

module.exports = async function (req, res) {
    let schema = await Joi.object({
        account_id: Joi.string().required(),
        amount: Joi.number().required(),
    })
    let {error} = schema.validate(req.body);
    if (error) {
        return res.status(400).send('Mandatory body parameters missing or have incorrect type.')
    };

    let transItem = await new Transactions({
        account_id: req.body.account_id,
        transaction: req.get('Transaction-Id'),
    });
    const session = await Amount.startSession();
        session.startTransaction();
    const opts = { session };
    let item = await Amount.findOne({account_id: req.body.account_id});
    transItem.save(opts);
    if (item) {
        if (item.transaction_id != req.body.transaction_id && item.amount !== req.body.amount) {
            item.amount += req.body.amount;
        }
    } else {
        item = await new Amount(req.body);
    }
    item.transaction_id = req.get('Transaction-Id')
    item.save(opts);
    await session.commitTransaction();
    session.endSession();
    res.status(200).send('Transaction created.');
}
