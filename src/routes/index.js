var express = require('express');
var router = express.Router();
let controller = require("../controllers/indexController");
let formValidator = require("../validations/formValidator");

router.get('/', controller.index);
router.post("/form", formValidator, controller.indexProcess);
router.get("/hey", controller.heyUser);
router.post("/delete", controller.delete);

module.exports = router;