require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("sales db connected");
  })
  .catch((err) => {
    console.log(err);
  });

const ProductSchema = new mongoose.Schema({
    itemName: String,
    hsnCode: String,
    quantity: String,
    price: String,
    discount: String,
    size: String,
    amount: String,
    sgst:String,
  cgst:String
});

const salesSchema = new mongoose.Schema({
    customerName: String,
    mobile: String,
    salesOrderNo: String,
    salesOrderDate: String,
  
  product: [ProductSchema],
  totalGST:String,
  totalDiscount:String,
  totalTax:String
});

const salesModel = mongoose.model("sale", salesSchema);

module.exports = salesModel;