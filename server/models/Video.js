const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({

    title: String,

    description: String,

    videoUrl: {
        publicId: String,
        url: String,
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        text: String
    }],

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]

}, {
    timestamps: true,
});

module.exports = mongoose.model('Video', videoSchema);