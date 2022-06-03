let orderDataDB = require('../MongoUtil').getOrderDataDB;
const config = require('../config');

const ordersController= () =>  {
    this.createOrder = async (req,res) => {

        let getData = await orderDataDB().findOne(
            //...object
        )

        await orderDataDB().insertOne(
            //new object
        )

        

    }
}

module.exports = ordersController;