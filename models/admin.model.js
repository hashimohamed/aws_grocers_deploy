let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let AdminSchema = mongoose.Schema({
  id: String,
  password: String,
  reports: String,
});

let AdminModule;

try {
  AdminModule = mongoose.model("admin");
} catch {
  AdminModule = mongoose.model("admin", AdminSchema);
}

module.exports = AdminModule;
