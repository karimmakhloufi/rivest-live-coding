const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");
const skillController = require("./controller/skill");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/api/wilders", wilderController.create);
app.delete("/api/wilders", wilderController.delete);
app.get("/api/wilders", wilderController.read);
app.put("/api/wilders", wilderController.update);

app.post("/api/skills", skillController.create);
app.delete("/api/skills", skillController.delete);
app.get("/api/skills", skillController.read);
app.put("/api/skills", skillController.update);

const start = async () => {
  await dataSource.initialize();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

start();
