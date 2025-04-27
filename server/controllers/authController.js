const User = require("../models/User.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "the-secret"


class AuthController {
    async registration(req, res) {
        try {
            const data = req.body
            const usernameExist = await User.findOne({ username: data.username })
            if (usernameExist) {
                res.send({ status: "Error", message: "Username already exist" })
            } else {
                const user = new User({
                    ...data,
                    created: new Date(Date.now()).toLocaleDateString(),
                    about:"",
                    email:"",
                    karma:1,
                    password: await bcrypt.hash(data.password, 8)
                })
                const newUser = await user.save()
                const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: "60m" })
                res.cookie('token', token, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 1000,
                })
                res.send({ status: "ok", message: "User has been registered successfuly", payload: newUser })
            }
        } catch (error) {
            console.log(error)
        }
    }

    async login(req, res) {
        try {
            const user = req.body
            const userExist = await User.findOne({ username: user.username })
            if (!userExist) {
                res.send({ status: "error", message: "User not found" })
            } else {
                const isValidPassword = await bcrypt.compare(user.password, userExist.password)
                if (!isValidPassword) {
                    res.send({ status: "error", message: "Password incorrect" })
                } else {
                    const token = jwt.sign({ userId: userExist._id }, JWT_SECRET, { expiresIn: "60m" })
                    res.cookie('token', token, {
                        httpOnly: true,
                        maxAge: 60 * 60 * 1000,
                    })
                    res.send({ status: 'ok', message: "Successfuly login", payload: userExist })
                }

            }
        } catch (error) {
            console.log(error)
        }
    }

    async verifyAuth(req, res) {
        const token = req.cookies.token

        if (!token) {
            return res.send({ status: "error", message: "Access denied!" })
        }

        try {
            const verified = jwt.verify(token, JWT_SECRET)
            const user = await User.findById(verified.userId)
            res.send({ status: "ok", message: "Access allowed", payload: user })

        } catch (error) {
            res.clearCookie("token")
            res.send({ status: "error", message: "Access denied!" })
        }
    }

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

    async logout(req, res) {
        try {
            res.clearCookie("token")
            res.send({ status: "ok", message: "logout" })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AuthController()