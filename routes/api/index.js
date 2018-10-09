const router = require("express").Router();
const travelRoutes = require("./trip");

router.use("/travel", travelRoutes);

module.exports = router;
