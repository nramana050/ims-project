require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

let cashSchema = new mongoose.Schema({
  adjustment: String,
  transferDate: String,
  enterAmount: Number,
  description: String,
});

let expenseSchema = new mongoose.Schema({
  sl: Number,
  vendorName: String,
  expenseCategory: String,
  expenseNo: Number,
  items: String,
  billDate: String,
  purchasePrice: Number,
});

const expenseModel = mongoose.model("expense", expenseSchema);
const cashModel = mongoose.model("cash", cashSchema);

module.exports = {
  expenseModel,
  cashModel,
};