const skillEntity = require("../entity/skill");
const wilderEntity = require("../entity/wilder");
const gradeEntity = require("../entity/grade");
const dataSource = require("../utils").dataSource;

module.exports = {
  read: async (req, res) => {
    const allWilders = await dataSource.getRepository(wilderEntity).find({
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
      .getRepository(wilderEntity)
      .save({ name: req.body.name })
      .then((createdWilder) => {
        console.log("wilder created, now we look at skills");
        if (req.body.skills) {
          req.body.skills.forEach(async (skill) => {
            const skillToAdd = await dataSource
              .getRepository(skillEntity)
              .findOneBy({ name: skill.name });
            console.log("found skill to add", skillToAdd);
            await dataSource.getRepository(gradeEntity).save({
              wilder: createdWilder,
              grade: skill.votes,
              skill: skillToAdd,
            });
          });
        }
        res.status(201).send("Wilder created");
      })
      .catch((error) => {
        console.log("Error", error);
        res.status(500).send("Error while creating the wilder");
      });
  },
  delete: async (req, res) => {
    console.log(req.body);
    await dataSource.getRepository(wilderEntity).delete(req.body.idToDelete);
    res.send("wilder deleted");
  },
  update: async (req, res) => {
    console.log(req.body);
    await dataSource
      .getRepository(wilderEntity)
      .update(req.body.id, { name: req.body.name });
    res.send("Wilder Updated");
  },
  addSkill: async (req, res) => {
    console.log(req.body);

    const wilderToAddSkillTo = await dataSource
      .getRepository(wilderEntity)
      .findOneBy({ name: req.body.wilderName });
    console.log(wilderToAddSkillTo);

    const skillToAddToWilder = await dataSource
      .getRepository(skillEntity)
      .findOneBy({ name: req.body.skillName });

    console.log(skillToAddToWilder);

    wilderToAddSkillTo.skills.push(skillToAddToWilder);

    await dataSource.getRepository(wilderEntity).save(wilderToAddSkillTo);

    res.send("Skill added to wilder");
  },
};
