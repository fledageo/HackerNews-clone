const express = require("express")
const authRouter = require("./authRouter.js")
const userRouter = require("./userRouter.js")
const postRouter = require("./postRouter.js")

const router = express.Router()

router.use("/auth", authRouter)
router.use("/user", userRouter)
router.use("/post", postRouter)

module.exports = router