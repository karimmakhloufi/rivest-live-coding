const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Wilder",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    name: {
      type: "text",
    },
  },
});
