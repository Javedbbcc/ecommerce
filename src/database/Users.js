const mongoose = require("mongoose")
const {Schema} = mongoose
const Users = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,type: String,
        required: true,
        unique: true,
    },
    password: {
      type: String,
      required: true,
    },
}) 
module.exports = mongoose.model("userModel",Users)