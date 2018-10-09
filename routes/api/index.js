const router = require("express").Router();
const travelRoutes = require("./trip");

router.use("/trips", travelRoutes);

module.exports = router;
