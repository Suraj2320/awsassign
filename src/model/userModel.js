const { Schema, model } = require("mongoose")
const UserSchema = new Schema({


    firstname: {
        type: String,
        required: false,
    },
    lastname: {
        type: String,
        required: false,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const UserModel = model("user", UserSchema)


module.exports = UserModel