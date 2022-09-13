const wilder = require("../entity/wilder");
const dataSource = require("../utils").dataSource;

module.exports = {
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
};
