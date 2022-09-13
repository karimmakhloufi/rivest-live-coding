const skill = require("../entity/skill");
const dataSource = require("../utils").dataSource;

module.exports = {
  read: async (req, res) => {
    const allSkills = await dataSource.getRepository(skill).find();
    res.send(allSkills);
  },
  create: (req, res) => {
    console.log(req.body);
    dataSource
      .getRepository(skill)
      .save(req.body)
      .then(() => {
        res.status(201).send("Skill created");
      })
      .catch((error) => {
        console.log("Error", error);
        res.status(500).send("Error while creating the skill");
      });
  },
  delete: async (req, res) => {
    console.log(req.body);
    await dataSource.getRepository(skill).delete(req.body.idToDelete);
    res.send("Skill deleted");
  },
  update: async (req, res) => {
    console.log(req.body);
    await dataSource
      .getRepository(skill)
      .update(req.body.id, { name: req.body.name });
    res.send("Skill Updated");
  },
};
