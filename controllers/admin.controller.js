let AdminModel = require("../models/admin.model");

let addAdmin = (req, res) => {
  let admin = new AdminModel({
    id: req.body.id,
    password: req.body.password,
    report: "none",
  });

  admin.save((err, result) => {
    if (!err) {
      res.send("Record stored succesfullyu");
    } else {
      res.send("record didn't send");
    }
  });
};

let getAdmin = (req, res) => {
  let aid = req.params.id;

  AdminModel.find({ id: aid }, (err, result) => {
    if (!err) {
      res.json(result[0]);
    }
  });
};

module.exports = { addAdmin, getAdmin };
