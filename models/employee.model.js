let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let EmployeeSchema = mongoose.Schema({
  _id: Number,
  password: String,
  firstname: String,
  lastname: String,
  emailid: String,
  resetpwd: Boolean,
});
let EmployeeModel;
try {
  EmployeeModel = mongoose.model("employee");
} catch {
  EmployeeModel = mongoose.model("employee", EmployeeSchema);
}

//module.exports = ProductModel; one model only below more than one
module.exports = EmployeeModel;
