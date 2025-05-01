const jwt = require("jsonwebtoken")
const User = require("../models/User.js")

class UserController {
    async getUserById(req, res) {
        const userId = req.params.userId

        try {
            const user = await User.findById(userId)
            if (!user) {
                res.send({ status: "error", message: "Something went wrong..." })
            } else {
                res.send({ status: "ok", payload: user })
            }
        } catch (error) {

        }
    }

    async updateUser(req, res) {
        try {
            const updateInfo = req.body
            const userId = jwt.decode(req.cookies.token).userId

            const updated = await User.findByIdAndUpdate(userId, {
                about: updateInfo.about,
                email: updateInfo.email
            },{new:true})
            res.send({status:"ok",payload:updated})
        } catch (error) {
            cosnole.log(error)
        }
    }
}

module.exports = new UserController()