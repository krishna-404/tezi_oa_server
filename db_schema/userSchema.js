const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  phoneNumber: { type: String },
  address1: { type: String },
  cancellationRate: { type: String },
  RTOrate: { type: String },
  genuineReturns: { type: String },
  nonGenuineReturns: { type: String },
  orderIds: [
    {
      marketplName: { type: String, required: true },
      mktplOrderId: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
