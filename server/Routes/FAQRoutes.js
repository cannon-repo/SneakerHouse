const express = require("express");
const router = express.Router();
const FAQController = require("../Controllers/FAQControllers");

router.post("/addFAQ", FAQController.postAddFAQ);

router.get("/allFAQ", FAQController.getAllFAQ);

module.exports = router;