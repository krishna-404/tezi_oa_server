const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shippingSchema = new Schema({
  shippingData: {
    mktplOrderIds: [{ type: String }],
    docCreatedOn: [{ type: Date, required: true }],
    mktplName: { type: String, required: true },
    mktplSellerId: {},
    type: "shippingData",
    mktplOrderStatus: [
      {
        date: { type: Date },
        status: { type: String },
      },
    ],
    buyerDetails: {
      name: { type: String },
      address1: { type: String },
      address2: { type: String },
      city: { type: String },
      pincode: { type: Number },
      state: { type: String },
      gstNumber: { type: Number },
      panNumber: { type: Number },
    },
    mktplShipmentId: { type: String },
    shipmentMode: { type: String },
    paymentMode: { type: String },
    numberOfProductsOrdered: { type: Number },
    productsDetails: [
      {
        mktplOrderId: { type: String },
        orderSkuId: { type: String },
        orderItemId: { type: String },
        orderFsnId: { type: String },
        orderHsnCode: { type: String },
        orderQuantity: { type: Number },
        productAmtCharged: { type: Number },
        shippingAmtCharged: { type: Number },
        totalAmtCharged: { type: Number },
        taxAmt: {
          sgst: { type: Number },
          cgst: { type: Number },
          igst: { type: Number },
          ugst: { type: Number },
          totalTax: { type: Number },
        },
      },
    ],
    grandTotalAmtCharged: { type: Number },
    shipmentPackedDate: { type: Date },
    shipmentRtdDate: { type: Date },
    shipmentPickedDate: { type: Date },
    mktplTrackingId: { type: String },
    logisticsPartner: { type: String },
    orderDeliveredDate: { type: Date },
  },
});