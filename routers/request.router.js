let express = require("express");
const RequestRouter = require("../controllers/request.controller");
let router = express.Router();

router.get("/getAllRequests", RequestRouter.getAllRequests);
router.post("/createRequest", RequestRouter.createRequest);
router.delete(
  "/delete/:sender/:description/:type",
  RequestRouter.deleteRequest
);

module.exports = router;
