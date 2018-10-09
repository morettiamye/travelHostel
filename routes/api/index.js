const router = require("express").Router();
const travelRoutes = require("./travel");

router.use("/travel", travelRoutes);

module.exports = router;
