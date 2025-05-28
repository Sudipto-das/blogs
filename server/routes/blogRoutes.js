const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Create a new blog
router.post('/create', async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const blog = new Blog({
      title,
      content,
      tags
    });

    const savedBlog = await blog.save();
    res.status(200).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// get all blogs
router.get('/', async (req, res) => {
  try {
    const allBlogs = await Blog.find({})
    res.status(200).json(allBlogs)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})
// get single blog
router.get('/:id', async (req, res) => {
  const Id = req.params.id
  try {
    const blog = await Blog.findById(Id)
    res.status(200).json(blog)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

module.exports = router; 