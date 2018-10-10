const router = require("express").Router();
const travelRoutes = require("./trip");
const authRoutes = require('./auth')

router.use("/trips", travelRoutes);
router.use("/auth", authRoutes);

module.exports = router;