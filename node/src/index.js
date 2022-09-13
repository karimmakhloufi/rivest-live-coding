const express = require("express");
const wilder = require("./entity/wilder");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/wilders", wilderController.create);

app.delete("/api/wilders", wilderController.delete);

const start = async () => {
  await dataSource.initialize();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

start();
