require('dotenv').config();

let config = {};

config.DB = process.env.CUSTOMCONNSTR_DB || process.env.DB;
config.dbName = 'tezi_oa';
config.urlDataCollectionName = 'orderData';

config.port = process.env.PORT || 1729;

config.domainName = process.env.URL || "http://localhost"

module.exports = config;

