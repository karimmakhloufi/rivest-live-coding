const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Grade",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    grade: {
      type: "int",
    },
  },
  relations: {
    wilder: {
      type: "many-to-one",
      target: "Wilder",
    },
    skill: {
      type: "many-to-one",
      target: "Skill",
    },
  },
});
