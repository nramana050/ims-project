const app = require("../server");

const {
  createExpense,
  getExpense,
  createCash,
  getCash,
  deleteItem,
} = require("./dataController");

app.post("/accounts/expense", createExpense);
app.get("/accounts/expense", getExpense);
app.post("/accounts/cash", createCash);
app.get("/accounts/cash", getCash);
app.delete("/expense/delete/:id", deleteItem);

module.exports = app;