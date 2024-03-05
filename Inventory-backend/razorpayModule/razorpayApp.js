const app = require("../server");

const {
    createRazor,
    getRazor
  } = require("./dataController");


app.post("/order", createRazor)
app.get("/payment/transactions",getRazor)

module.exports = app;