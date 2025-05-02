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
            const newest = await Post.find()
                .populate('author', "username")
                .sort({ createdAt: -1 })
                .limit(10)
            res.send({ status: "ok", payload: newest })
        } catch (error) {
            res.send({ status: "error", message: `Something went wrong... ${error}` })
            console.log(error)
        }
    }
    async getPosts(req, res) {
        const { type } = req.body
        try {
            const posts = await Post.find({ type: type })
                .populate('author', "username")
                .sort({ createdAt: -1 })
                .limit(10)
            res.send({ status: "ok", payload: posts })
        } catch (error) {
            console.log(error)
        }
    }
    async getPostById(req, res) {
        const { id } = req.params
        try {
            const post = await Post.findById(id).populate('author', "username")
            res.send({ status: "ok", payload: post })
        } catch (error) {
            console.log(error)
        }
    }

    async upvote(req, res) {
        const { from, postId } = req.body
        try {
            const post = await Post.findByIdAndUpdate(
                postId,
                {
                    $inc: { points: 1 },
                    $push: { pointsFrom: from }
                },
                { new: true }
            );
            res.send({ status: "ok", payload: post })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new PostController()