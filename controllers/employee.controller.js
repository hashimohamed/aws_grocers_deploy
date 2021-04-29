const EmployeeModel = require("../models/employee.model.js");

//http://localhost:9090/employee/allEmployeeDetails/   GET - REST API
let geEmpoyeeDetails = (req, res) => {
  EmployeeModel.find({}, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};

//http://localhost:9090/employee/retrieveEmployeeById/104  GET - REST API
let getEmployeeById = (req, res) => {
  let cId = req.params.cId;
  EmployeeModel.find({ _id: cId }, (err, data) => {
    if (!err) {
      res.json(data);
      //res.json(data[0])
    }
  });
};

//http://localhost:9090/employee/storeEmployeeDetails  POST - REST API
let storeEmployeeDetails = (req, res) => {
  let employee = new EmployeeModel({
    _id: req.body.cId,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    emailid: req.body.emailid,
    password: "Welcome123",
    resetpwd: true,
  });
  employee.save((err, result) => {
    if (!err) {
      res.send("Employee Record stored successfully");
      //res.json({"msg":"Record stored sucessfully"})
    } else {
      res.send("Employee Record did not store" + err);
    }
  });
};

//http://localhost:9090/employee/deleteEmployeeById/103 // DELETE - rest API
let deleteEmployeeId = (req, res) => {
  let cId = req.params.cId;
  EmployeeModel.deleteOne({ _id: cId }, (err, result) => {
    if (!err) {
      if (result.deletedCount > 0) {
        res.send("Employee Record deleted successfully");
      } else {
        res.send("Employee Record not present");
      }
    } else {
      res.send("Error generated " + err);
    }
  });
};

//http://localhost:9090/employee/updateEmployeeByPassword
let updateEmployeePassword = (req, res) => {
  let cId = req.body.cId;
  let updatePassword = req.body.password;
  let resetpwd = false;
  EmployeeModel.updateMany(
    { _id: cId },
    { $set: { password: updatePassword, resetpwd: resetpwd } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send("Employee Record updated succesfully");
        } else {
          res.send("Employee Record is not available");
        }
      } else {
        res.send("Error generated " + err);
      }
    }
  );
};

//http://localhost:9090/employee/validateEmployee
let validateEmployee = (req, res) => {
  let cid = req.params.cId;

  EmployeeModel.find({ _id: cid }, (err, result) => {
    if (!err) {
      res.json(result[0]);
    }
  });
};

module.exports = {
  geEmpoyeeDetails,
  storeEmployeeDetails,
  getEmployeeById,
  deleteEmployeeId,
  updateEmployeePassword,
  validateEmployee,
};
