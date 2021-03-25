const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    applied: {
        type: Number,
        default: 0
    },
    rejected: {
        type: Number,
        default: 0
    },
    OA: {
        type: Number,
        default: 0
    },
    interviews: {
        type: Number,
        default: 0
    },
    offers: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;