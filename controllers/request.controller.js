let RequestModel = require("../models/request.model");

let createRequest = (req, res) => {
  let request = new RequestModel({
    sender: req.body.sender,
    type: req.body.type,
    description: req.body.description,
  });

  request.save((err, result) => {
    if (!err) {
      res.send("Request added");
    } else {
      res.send("Request didnot get saved");
    }
  });
};

let getAllRequests = (req, res) => {
  RequestModel.find({}, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};

let deleteRequest = (req, res) => {
  let send = req.params.sender;
  let desc = req.params.description;
  let type = req.params.type;

  RequestModel.deleteOne(
    { sender: send, description: desc, type: type },
    (err, result) => {
      if (!err) {
        if (result.deletedCount > 0) {
          res.send("record succesfully deleted");
        } else {
          res.send("Could not find record");
        }
      } else {
        res.send("error", err);
      }
    }
  );
};

module.exports = { createRequest, getAllRequests, deleteRequest };
