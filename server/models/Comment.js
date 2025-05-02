const { Schema, model } = require("mongoose")

const Comment = new Schema({
    author: { type: Schema.Types.ObjectId, ref:"user" },
    createdAt: { type: Date, default: Date.now() },
    text: { type: String, require: true },
    childs:[{type:Schema.Types.ObjectId,ref:"comment"}],
    parent:{type:Schema.Types.ObjectId,ref:"comment", default:null},
    post:{type:Schema.Types.ObjectId,ref:"post"}
})                                      

module.exports = model("comment", Comment)