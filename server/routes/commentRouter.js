const express = require("express");
const CommentController = require("../controllers/commentController.js");
const router = express.Router();

router.post("/add",CommentController.add)
router.post("/reply",CommentController.reply)
router.get("/get/:id",CommentController.getAll)
router.get("/getById/:id",CommentController.getById)

module.exports = router;