let ProductModel = require("../models/product.model");

// Add a product
let addProduct = (req, res) => {
  let product = new ProductModel({
    _id: req.body.id,
    name: req.body.name,
    quantity: req.body.quantity,
    initQuantity: req.body.quantity,
    cost: req.body.cost,
    discount: 0,
  });

  product.save((err, result) => {
    if (!err) {
      res.send("Record stored succesfully");
    } else {
      res.send("record didnt store");
    }
  });
};

// Delete a product by id
let deleteProduct = (req, res) => {
  let id = req.params.id;
  ProductModel.deleteOne({ _id: id }, (err, result) => {
    if (!err) {
      if (result.deletedCount > 0) {
        res.send("record deleted succesfully");
      } else {
        res.send("record not present");
      }
    } else {
      res.send("error generated while deleting " + err);
    }
  });
};

// retrieve product info by ID
// let getProduct = (req, res) => {
//   let id = req.params.id;
//   ProductModel.find();
// };

// retreive all products
let getAllProducts = (req, res) => {
  ProductModel.find({}, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};

// update product discount
let updateDiscount = (req, res) => {
  let id = req.body.id;
  let updatedDiscount = req.body.discount;

  ProductModel.updateOne(
    { _id: id },
    { $set: { discount: updatedDiscount } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send("record updated succesfully " + result);
        } else {
          res.send("record not found");
        }
      } else {
        res.send("Error in updating product by quantity");
      }
    }
  );
};

// update product cost
let updateCost = (req, res) => {
  let id = req.body.id;
  let updatedCost = req.body.cost;

  ProductModel.updateOne(
    { _id: id },
    { $set: { cost: updatedCost } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send("record updated succesfully " + result);
        } else {
          res.send("record not found");
        }
      } else {
        res.send("Error in updating product by quantity");
      }
    }
  );
};

// update product quanitity
let updateQuantity = (req, res) => {
  let id = req.body.id;
  let updatedQuantity = req.body.quantity;

  ProductModel.updateOne(
    { _id: id },
    { $set: { quantity: updatedQuantity, initQuantity: updatedQuantity } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send("record updated succesfully " + result);
        } else {
          res.send("record not found");
        }
      } else {
        res.send("Error in updating product by quantity");
      }
    }
  );
};

let reduceQuantity = (req, res) => {
  let id = req.body.id;
  let subtractedAmount = req.body.quantity;
  let newAmount;

  ProductModel.find({ name: id }, (err, result) => {
    if (!err) {
      console.log("product:", result);
      console.log(result[0].quantity);
      console.log(subtractedAmount);
      if (result[0].quantity > subtractedAmount) {
        newAmount = result[0].quantity - subtractedAmount;
        console.log("New amount is", newAmount);

        ProductModel.updateOne(
          { name: id },
          { $set: { quantity: newAmount } },
          (err1, result1) => {
            if (!err1) {
              if (result1.nModified > 0) {
                let newObj = {
                  approved: true,
                };
                res.json(newObj);
              } else {
                res.send("Could not find prodct");
              }
            } else {
              res.send("Error");
            }
          }
        );
      } else {
        let newError = {
          approved: false,
        };
        res.json(newError);
      }
    } else {
      res.send("cant find the product to redue its quanitity");
    }
  });

  // ProductModel.updateOne(
  //   { _id: id },
  //   { $set: { quantity: newAmount } },
  //   (err, result) => {
  //     if (!err) {
  //       if (result.nModified > 0) {
  //         let newObj = {
  //           approved: true,
  //         };
  //         res.json(newObj);
  //       } else {
  //         res.send("Could not find prodct");
  //       }
  //     } else {
  //       res.send("Error");
  //     }
  //   }
  // );
};

module.exports = {
  addProduct,
  updateQuantity,
  deleteProduct,
  updateDiscount,
  updateCost,
  getAllProducts,
  reduceQuantity,
};
