const router = require("express").Router();
const travelController = require("../../controllers/travelController");

// Matches with "/api/trips"
router.route("/")
  .get(travelController.findAll)
  .post(travelController.create);

// Matches with "/api/trips/:id"
router
  .route("/:id")
  .get(travelController.findById)
  .put(travelController.update)
  .delete(travelController.remove);

router
  .route("/lookup")
  .post(travelController.findByCity) // made POST to take a body but really returns

module.exports = router;
