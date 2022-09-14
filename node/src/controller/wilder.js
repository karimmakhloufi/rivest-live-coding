const skill = require("../entity/skill");
const wilder = require("../entity/wilder");
const dataSource = require("../utils").dataSource;

module.exports = {
  read: async (req, res) => {
    const allWilders = await dataSource.getRepository(wilder).find({
      relations: {
        grades: {
          skill: true,
        },
      },
    });
    res.send(allWilders);
  },
  create: (req, res) => {
    console.log(req.body);
    dataSource
      .getRepository(wilder)
      .save(req.body)
      .then(() => {
        res.status(201).send("Wilder created");
      })
      .catch((error) => {
        console.log("Error", error);
        res.status(500).send("Error while creating the wilder");
      });
  },
  delete: async (req, res) => {
    console.log(req.body);
    await dataSource.getRepository(wilder).delete(req.body.idToDelete);
    res.send("wilder deleted");
  },
  update: async (req, res) => {
    console.log(req.body);
    await dataSource
      .getRepository(wilder)
      .update(req.body.id, { name: req.body.name });
    res.send("Wilder Updated");
  },
  addSkill: async (req, res) => {
    console.log(req.body);

    const wilderToAddSkillTo = await dataSource
      .getRepository(wilder)
      .findOneBy({ name: req.body.wilderName });
    console.log(wilderToAddSkillTo);

    const skillToAddToWilder = await dataSource
      .getRepository(skill)
      .findOneBy({ name: req.body.skillName });

    console.log(skillToAddToWilder);

    wilderToAddSkillTo.skills.push(skillToAddToWilder);

    await dataSource.getRepository(wilder).save(wilderToAddSkillTo);

    res.send("Skill added to wilder");
  },
};
