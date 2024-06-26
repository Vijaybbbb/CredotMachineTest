const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true // Keeping unique constraint for email field
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBlocked:{
        type: Boolean,
        default: false
    },

}, { timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = User;
