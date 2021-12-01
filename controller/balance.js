const Transaction = require('../models/amount')

module.exports = async function(req,res){
    let item = await Transaction.find({account_id: req.params.id}, {_id: 0, amount: 1}).lean()
    if (!item.length) {
        return res.status(404).send('account not found')
    }
    res.status(200).send({balance: item[0].amount});
}