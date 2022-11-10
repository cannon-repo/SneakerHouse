const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        default: false,
        require: true
    },
    Email: {
        type: String,
        required: true
    },
    Pwd: {
        type: String,
        required: true,
        minlength: 6
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;