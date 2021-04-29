let express = require("express");
const ProductController = require("../controllers/product.controller");
let router = express.Router();

router.post("/addProduct", ProductController.addProduct);
router.delete("/deleteProduct/:id", ProductController.deleteProduct);
router.put("/updateQuantity", ProductController.updateQuantity);
router.put("/updateCost", ProductController.updateCost);
router.get("/getAllProducts", ProductController.getAllProducts);
router.put("/reduceQuantity", ProductController.reduceQuantity);

module.exports = router;
