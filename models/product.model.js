let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let ProductSchema = mongoose.Schema({
  _id: Number,
  name: String,
  initQuantity: Number,
  quantity: Number,
  cost: Number,
  discount: Number,
});
let ProductModel;
try {
  ProductModel = mongoose.model("product");
} catch {
  ProductModel = mongoose.model("product", ProductSchema);
}

module.exports = ProductModel;
