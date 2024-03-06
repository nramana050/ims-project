const app = require("../server");

const { createSales, getSales, deleteSales } = require("./dataController");

app.post("/sales", createSales);
app.get("/sales", getSales);
// app.get("/inventory/items-list/:id", getListItem);
// app.delete("/inventory/delete/:id", deleteListItem);
app.delete("/sales/delete/:id", deleteSales);

module.exports = app;
