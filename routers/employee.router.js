let express = require("express");
let router = express.Router(); // router reference - pass flow to controller
let EmployeeController = require("../controllers/employee.controller.js");
//const EmployeeModel = require("../models/employee.model.js");

//mapping sub parth with http methods
router.get("/allEmployeeDetails",EmployeeController.geEmpoyeeDetails); 
router.get("/retrieveEmployeeById/:cId", EmployeeController.getEmployeeById);
router.post("/storeEmployeeDetails",EmployeeController.storeEmployeeDetails);
router.delete("/deleteEmployeeById/:cId",EmployeeController.deleteEmployeeId);
router.put("/updateEmployeeByPassword",EmployeeController.updateEmployeePassword);
router.get("/validateEmployee/:cId",EmployeeController.validateEmployee);

module.exports=router;

