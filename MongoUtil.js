const {MongoClient} = require('mongodb');
const config = require('./config');

let orderAnalystDB;

let mongoUtil = {

    connectToServer : function(callback) {
        const client = new MongoClient(config.DB, { useNewUrlParser: true, useUnifiedTopology: true });
        try {
            client.connect((err, client) => {
                // console.log({err, client});
                orderAnalystDB = client.db(config.dbName).collection(config.orderDataCollectionName);
                return callback(err);
            });
        } catch(e) {
            console.error(e);
        } finally {
            client.close();
        }
    },
    getOrderAnalystDB : function() {
        // console.log({urlDataDB})
        return orderAnalystDB;
    }
}

module.exports = mongoUtil;