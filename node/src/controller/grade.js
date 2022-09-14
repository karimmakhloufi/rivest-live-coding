const grade = require("../entity/grade");
const wilder = require("../entity/wilder");
const skill = require("../entity/skill");
const dataSource = require("../utils").dataSource;

module.exports = {
  create: async (req, res) => {
    const wilderFromDB = await dataSource
      .getRepository(wilder)
      .findOneBy({ name: req.body.wilderName });

    const skillFromDB = await dataSource
      .getRepository(skill)
      .findOneBy({ name: req.body.skillName });

    await dataSource.getRepository(grade).save({
      grade: req.body.grade,
      wilder: wilderFromDB,
      skill: skillFromDB,
    });
    res.send("Grade created");
  },
};
