// index.js
const app = require("./loginModules/loginApp");
const buyerSupplierApp = require("./buyerSupplierModule/buyerSupplierApp");
const inventoryApp = require("./inventoryModule/InventoryApp");
const salesApp = require("./salesModule/salesApp");
const razorpayApp = require("./razorpayModule/razorpayApp")

const PORT = process.env.PORT || 3500;
const BUYER_SUPPLIER_PORT = process.env.BUY_SUP_PORT || 3600;
const INVENTORY_PORT = process.env.INVENTORY_PORT || 3700;
const SALES_PORT = process.env.SALES_PORT || 3800;
const RAZORPAY_PORT = process.env.RAZORPAY_PORT || 5000

app.listen(PORT, () => {
  console.log(`Login server started on port ${PORT}`);
});

buyerSupplierApp.listen(BUYER_SUPPLIER_PORT, () => {
  console.log(`Buyer-Supplier server started on port ${BUYER_SUPPLIER_PORT}`);
});
inventoryApp.listen(INVENTORY_PORT, () => {
  console.log(`Inventory server started on port ${INVENTORY_PORT}`);
});
salesApp.listen(SALES_PORT, () => {
  console.log(`Sales server started on port ${SALES_PORT}`);
});

razorpayApp.listen(RAZORPAY_PORT, () => {
  console.log(`Razorpay server started on port ${RAZORPAY_PORT}`);
})
