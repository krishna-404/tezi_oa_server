const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  mktplOrderId: { type: String, required: true },
  marketplName: { type: String, required: true },
  mktplSellerId: { type: String, required: true },
  sellerName: { type: String },
  type: "orderData",
  lastAutoCreateTime: { type: Date },
  currency: { type: String },
  docCreatedOn: { type: Date, required: true },
  orderApprovalDate: { type: Date },
  orderCreationDate: { type: Date, required: true },
  promotionsApplied: [{ type: String }],
  marketplStatus: [
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
    phoneNumber: {
      isdCode: { type: String },
      number: { type: Number },
    },
    gstNumber: { type: Number },
    panNumber: { type: Number },
  },
  orderCancelationReason: { type: String },
  orderCancelationDate: { type: Date },
  invoiceGenreated: { type: Boolean },
  invoiceNo: { type: Number },
  paymentMode: { type: String },
  sellerDetails: {
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
    GSTNumber: { type: Number },
    panNumber: { type: Number },
  },
  paymentMode: { type: String },
  numberOfProductsOrdered: { type: Number, required: true },
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
      productName: { type: String },
      productSetType: { type: String },
      // incaseofcommbo
      subProductQuantity: { type: Number },
      amountOfPairs: { type: String },
      sizeSet: { type: String },
      colour: { type: String },
      promotionAmt: { type: Number },
    },
  ],
  totalProductAmtCharged: { type: Number },
  totalShippingAmtCharged: { type: Number },
  grandTotalAmtCharged: { type: Number },
  taxAmt: {
    sgst: { type: Number },
    cgst: { type: Number },
    igst: { type: Number },
    ugst: { type: Number },

    totalTax: { type: Number },
  },
});

module.exports = mongoose.model("Order", orderSchema);
