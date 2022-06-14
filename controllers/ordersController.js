let orderDataDB = require('../MongoUtil').getOrderDataDB;
const config = require('../config');

function ordersController()  {

    this.ordersExist = async (req,res) => {

        console.log("ordersController.ordersExist line 8", req.body);

        if(req.body.action === "Check orders exist"){
            // let getData = await orderDataDB().find({
            //     mktplOrderId: {
            //         $in: req.body.pageOrderIds
            //     },
            //     // marketplaceName: {$eq: req.body.marketplace},
            //     mktplSellerId: {$eq: req.body.mktplSellerId}
            // }).toArray();

            // console.log({getData});

            let ordersIdsToCreate = [];
            for (let orderId of req.body.mktplSellerId) {
                let getData = await orderDataDB().findOne({
                    mktplOrderId: {$eq: orderId},
                    marketplaceName: {$eq: req.body.marketplace},
                    mktplSellerId: {$eq: req.body.mktplSellerId}
                })

                if(!getData){
                    ordersIdsToCreate.push(orderId);
                }
            }
            
            res 
                .status(200)
                .json({ordersIdsToCreate, mktplSellerId: req.body.mktplSellerId});
        } else {
            res 
                .status(404)
                .json({status: "error", message:"Wrong API"})
        }
        
    }

    this.createOrder = async (req,res) => {

        // await orderDataDB().insertOne(
        let bulk = orderDataDB().initializeUnorderedBulkOp();
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

module.exports = ordersController;