const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Post = require('../models/post');
const Blog = require('../models/blog');

router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/blogs/:blogId', async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


//Create
router.post('/', async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const userId = req.session.userId; 

        const newPost = new Post({ title, content, category, user: userId });
        await newPost.save();
        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

//Create
router.post('/postsup', async (req, res) => {
    try {
        const { title, content, category, date, author } = req.body;

        const newPost = new Post({ 
            title, 
            content, 
            category,
            date: date || new Date(),
            author: author || 'Anonymous'
        });
        await newPost.save();

        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ 
            message: 'Failed to create post',
            error: error.message 
        });
    }
});

//Read
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

//Read
router.get('/:postId', async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update
router.put('/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        const { title, content, category } = req.body;
        const userId = req.session.userId; 

        const post = await Post.findOne({ _id: postId, user: userId });
        if (!post) {
            return res.status(404).json({ message: 'Post not found or unauthorized' });
        }

        post.title = title;
        post.content = content;
        post.category = category;
        await post.save();

        res.status(200).json({ message: 'Post updated successfully', post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

//Delete
router.delete('/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        const userId = req.session.userId; 

        const deletedPost = await Post.findOneAndDelete({ _id: postId, user: userId });
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found or unauthorized' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
