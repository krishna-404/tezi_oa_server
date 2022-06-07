let orderDataDB = require('../MongoUtil').getOrderDataDB;
const config = require('../config');

function ordersController()  {

    this.ordersExist = async (req,res) => {

        console.log(req.body);
        let getData = await orderDataDB().find({
            mktplOrderId: req.body.pageOrderIds,
            marketplace: req.body.marketplace,
            mktplSellerId: req.body.mktplSellerId
        });

        console.log({getData});
        
        res 
            .status(200)
            .json(getData);
        
    }

    this.createOrder = async (req,res) => {

        await orderDataDB().insertOne(
            req.body
        ).then(dbRes => {
            console.log(dbRes);

            res .status(200)
                .json(dbRes)
                .header("Access-Control-Allow-Origin", "*")
                // .type('text/html') 
                // .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        })

        

    }
}

module.exports = ordersController;