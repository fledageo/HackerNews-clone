const { Schema, model } = require("mongoose")

const User = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    created: { type: String, require: true },
    karma: { type: Number, require: true },
    about: { type: String, require: true },
    email: { type: String, require: true }
})

module.exports = model("user", User)