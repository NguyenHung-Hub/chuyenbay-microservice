const router = require("express").Router();
const nhanvienController = require("../controllers/nhanvien.controller");

router.post("/", nhanvienController.create);
router.get("/", nhanvienController.get);
router.delete("/", nhanvienController.delete);

module.exports = router;
