const express = require("express");
const PostController = require("../controllers/postController.js");

const router = express.Router();

router.post("/add", PostController.add);
router.get("/get/newest", PostController.getNewest);
router.get("/get/:id", PostController.getPostById);


module.exports = router;