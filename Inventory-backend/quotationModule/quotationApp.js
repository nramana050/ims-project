const app = require("../server");

const {
  createQuotation,
  getQuotation,
  deleteItem,
} = require("./dataController");

app.post("/quotation", createQuotation);
app.get("/quotation", getQuotation);
app.delete("/quotation/delete/:id", deleteItem);
module.exports = app;
