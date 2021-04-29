let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let RequestSchema = mongoose.Schema({
  sender: String,
  type: String,
  description: String,
});

let RequestModel;

try {
  RequestModel = mongoose.model("request");
} catch {
  RequestModel = mongoose.model("request", RequestSchema);
}

module.exports = RequestModel;
