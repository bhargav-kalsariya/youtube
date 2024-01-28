const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: String,

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        unique: true,
        required: true,
        select: false,
    },

    profilePhoto: {
        publicId: String,
        url: String,
    },

    bio: String,

    subscribers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],

    subscription: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],

    videos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
    }]

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);