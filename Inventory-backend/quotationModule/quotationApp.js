const app = require("../server");

const {
  createQuotation,
  getQuotation
} = require("./dataController");

app.post("/quotation", createQuotation);
app.get("/quotation", getQuotation);

module.exports = app;