const Transaction = require('../models/amount')

module.exports = async function(req,res){
    let item = await Transaction.find({transaction_id: req.params.id},{ _id: 0 ,amount:1,account_id:1}).lean()
    if (!item.length) {
        return res.status(404).send('Transaction not found')
    }
    res.status(200).send(...item)
}