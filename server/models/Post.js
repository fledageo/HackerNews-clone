const { Schema, model } = require("mongoose")

const Post = new Schema({
    title: { type: String },
    url: { type: String },
    text: { type: String },
    type: { type: String },
    createdAt: { type: Date, default: Date.now() },
    points: { type: Number },
    pointsFrom: [{type: Schema.Types.ObjectId, ref:"user"}],
    author: { type: Schema.Types.ObjectId, ref: "user" },
    comments: [{type: Schema.Types.ObjectId, ref:"comment"}]
})

module.exports = model("post", Post)