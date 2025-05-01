const express = require("express");
const authController = require("../controllers/authController.js");

const router = express.Router();

router.post("/registration", authController.registration);
router.post("/login", authController.login);
router.get("/logout",authController.logout)
router.get("/verify",authController.verifyAuth)

module.exports = router;