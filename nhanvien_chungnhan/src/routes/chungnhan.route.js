const router = require("express").Router();
const chungNhanController = require("../controllers/chungnhan.controller");

router.post("/", chungNhanController.create);
router.get("/", chungNhanController.get);
router.delete("/:id", chungNhanController.delete);

module.exports = router;
