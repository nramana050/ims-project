const app = require("../server");

const {
  createSales,
  getSales
//   getListItem,
//   deleteListItem,
} = require("./dataController");

app.post("/sales", createSales);
app.get("/sales", getSales);
// app.get("/inventory/items-list/:id", getListItem);
// app.delete("/inventory/delete/:id", deleteListItem);

module.exports = app;