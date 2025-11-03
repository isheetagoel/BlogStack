const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  id: Number,
  title: String,
  desc: String,
  category: String,
  cover: String,
  date: String,
  author: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
