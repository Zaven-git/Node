const Transaction = require('../models/transactions')

module.exports = async function(req,res){
    let items = await Transaction.aggregate([
        {
            $group: {
                _id: '$account_id',
                ids: {
                    $push: '$account_id',
                },
            }
        },
        {
            $project: {
                _id: false,
                Transactoins: '$ids',
            }
        },
    ])
    let maxVolume = Math.max(...items.map(el => el.Transactoins.length ))
    let accounts = [];
    items.forEach(el => {
        if(el.Transactoins.length === maxVolume ){
            accounts.push(el.Transactoins[0])
        }
    })
    res.send({maxVolume,accounts})
}
