const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: false,
        },
        category: {
            type: String,
            require: false,
        },
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;