const express = require("express");
const cors = require("cors");
const dataSource = require("./utils").dataSource;

const wilderController = require("./controller/wilder");
const skillController = require("./controller/skill");
const gradeController = require("./controller/grade");

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.post("/api/wilders", wilderController.create);
app.delete("/api/wilders", wilderController.delete);
app.get("/api/wilders", wilderController.read);
app.put("/api/wilders", wilderController.update);
app.post("/api/wilders/addSkill", wilderController.addSkill);

app.post("/api/skills", skillController.create);
app.delete("/api/skills", skillController.delete);
app.get("/api/skills", skillController.read);
app.put("/api/skills", skillController.update);

app.post("/api/grade", gradeController.create);

const start = async () => {
  await dataSource.initialize();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

start();
