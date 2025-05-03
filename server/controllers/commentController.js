const Comment = require("../models/Comment.js")
const Post = require("../models/Post.js")

class ComentController {
    async add(req, res) {
        const newComment = req.body
        try {
            const comment = await Comment.create(newComment)
           
            const updatePost = await Post.findByIdAndUpdate(newComment.post,{$push: {comments:comment._id}},{ new: true })
            .populate([
                {
                    path:"comments",
                    populate:{path:"author",select:"username"}
                },
            ])
            console.log(updatePost) 
            
            res.send({ status: "ok", payload: updatePost })
        } catch (error) {
            console.log(error)
        }
    }
    async getAll(req, res) {
        const { id } = req.params
        try {
            const comments = await Comment.find({ post: id }).populate([
                { path: "author", select: "username" },
            ]);
            res.send({ status: "ok", payload: comments })

        } catch (error) {
            console.log(error)
        }
    }
    async getById(req, res) {
        const { id } = req.params
        try {
            const comment = await Comment.findById(id).populate([
                { path: "author", select: "username" },
                { path: "post", select: "title" }
            ]);
            res.send({ status: "ok", payload: comment })

        } catch (error) {
            console.log(error)
        }
    }

    async reply(req, res) {
        const newComment = req.body

        try {
            const childComment = await Comment.create(newComment)
            const reply = await Comment.findByIdAndUpdate(newComment.parent, {
                $push: { childs: childComment._id }
            })
            const updatePost = await Post.findByIdAndUpdate(newComment.post,{$push: {comments:childComment._id}},{ new: true })
            .populate([
                {
                    path:"comments",
                    populate:{path:"author",select:"username"}
                },
            ])
            res.send({ status: "ok", payload: childComment })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ComentController()