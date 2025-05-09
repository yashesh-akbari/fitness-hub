// // backend/routes/classes.js
// const express = require('express');
// const Class = require('../models/Class');
// const router = express.Router();

// // Get all classes
// router.get('/api/classes', async (req, res) => {
//   try {
//     const classes = await Class.find();
//     res.json(classes);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Create a new class
// router.post('/api/classes', async (req, res) => {
//   const newClass = new Class({
//     title: req.body.title,
//     description: req.body.description,
//     image: req.body.image,
//     link: req.body.link,
//   });

//   try {
//     const savedClass = await newClass.save();
//     res.status(201).json(savedClass);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const Class = require('../models/Class');
const router = express.Router();

// GET all classes
router.get('/api/classes', async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new class
router.post('/api/classes', async (req, res) => {
  const newClass = new Class({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link,
  });

  try {
    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a class by ID
router.put('/api/classes/:id', async (req, res) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    res.json(updatedClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a class by ID
router.delete('/api/classes/:id', async (req, res) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(req.params.id);

    if (!deletedClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    res.json({ message: 'Class deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
