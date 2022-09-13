const typeorm = require("typeorm");

module.exports = {
  dataSource: new typeorm.DataSource({
    type: "sqlite",
    database: "wildersdb.sqlite",
    synchronize: true,
    entities: [require("./entity/wilder"), require("./entity/skill")],
    logging: ["query", "error"],
  }),
};
