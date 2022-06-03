const {MongoClient} = require('mongodb');
const config = require('./config');

let orderDataDB;

let mongoUtil = {

    connectToServer : function(callback) {
        const client = new MongoClient(config.DB, { useNewUrlParser: true, useUnifiedTopology: true });
        try {
            client.connect((err, client) => {
                // console.log({err, client});
                orderDataDB = client.db(config.dbName).collection(config.orderDataCollectionName);
                return callback(err);
            });
        } catch(e) {
            console.error(e);
        } finally {
            client.close();
        }
    },
    getOrderDataDB : function() {
        // console.log({urlDataDB})
        return orderDataDB;
    }
}

module.exports = mongoUtil;