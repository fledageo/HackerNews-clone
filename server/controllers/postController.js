const Post = require("../models/Post.js")

class PostController {
    async add(req, res) {
        const post = req.body
        try {
            if (post) {
                const newPost = await Post.create(post)
                res.send({ status: "ok", payload: newPost })
            }
        } catch (error) {
            res.send({ status: "error", message: `Something went wrong... ${error}` })
            console.log(error)
        }
    }
    async getNewest(req, res) {
        try {
            const newest = await Post.find().populate('author', "username").sort({ createdAt: -1 }).limit(5)
            res.send({ status: "ok", payload: newest })
        } catch (error) {
            res.send({ status: "error", message: `Something went wrong... ${error}` })
            console.log(error)
        }
    }
    async getPostById(req, res) {
        const { id } = req.params
        console.log(id)
        try {
            const post = await Post.findById(id).populate('author',"username")
            res.send({status:"ok",payload:post})
        } catch (error) {
            cosnole.log(error)
        }
    }
}

module.exports = new PostController()