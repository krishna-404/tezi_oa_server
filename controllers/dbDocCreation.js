let orderAnalystDB = require('../MongoUtil').getOrderAnalystDB;
const config = require('../config');

function dbDocCreation () {

    this.bulkCreate = async (req,res) => {

        // await orderDataDB().insertOne(
        let bulk = orderAnalystDB().initializeUnorderedBulkOp();
        for (let orderData of req.body){
            bulk.insert(orderData);
        }
        await bulk.execute()
                    .then(dbRes => {
                        console.log(dbRes);

                        res .status(200)
                            .json(dbRes)
                            // .header("Access-Control-Allow-Origin", "*")
                            // .type('text/html') 
                            // .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                    })
    }

}

module.exports = dbDocCreation;