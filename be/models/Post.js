const mongoose = require('mongoose');

const postsupchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true } 
});

const Post = mongoose.model('Post', postsupchema);

module.exports = Post;
