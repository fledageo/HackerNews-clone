const express = require("express")
const userController = require("../controllers/userController")

const router = express.Router()
router.get("/get/:userId",userController.getUserById)
router.post("/update", userController.updateUser)

module.exports = router