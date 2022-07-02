const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  pincode: { type: Number },
  state: { type: String },
  phoneNumber: {
    isdCode: { type: String },
    number: { type: Number },
  },
  gstNumber: { type: Number },
  panNumber: { type: Number },
  bijnisPerfomanceMatrix: [
    {
      cancellationRate: { type: String },
      genuineReturns: { type: String },
      RTOrate: { type: String },
      nonGenuineReturns: { type: String },
    },
  ],
  orderIds: [
    {
      marketplName: { type: String, required: true },
      mktplOrderId: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
