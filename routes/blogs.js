const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { getData } = require('./utils/apis');

// GET all blogs
// getData('/api/blogs',Blog)
router.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new blog
router.post('/api/blogs', async (req, res) => {
  const { title, description, image } = req.body;

  const newBlog = new Blog({ title, description, image });

  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a blog by ID
router.put('/api/blogs/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
  
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a blog by ID
router.delete('/api/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

// routes/blogs.js
// const express = require('express');
// const router = express.Router();
// const Blog = require('../models/Blog');
// const { registerCRUDRoutes } = require('../utils/apis');

// // Fields allowed in the Blog schema
// const blogFields = ['title', 'description', 'image'];

// registerCRUDRoutes(router, '/api/blogs', Blog, blogFields);
// module.exports = router;



