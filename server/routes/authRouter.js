const express = require("express");
const authController = require("../controllers/authController.js");

const router = express.Router();

router.post("/registration", authController.registration);
router.post("/login", authController.login);
router.get("/verify",authController.verifyAuth)
router.get("/user/:userId",authController.getUserById)

module.exports = router;