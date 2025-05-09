// const express = require('express');
// const router = express.Router();
// const Testimonial = require('../models/Testimonial');

// // GET all testimonials
// router.get('/api/testimonials', async (req, res) => {
//   try {
//     const testimonials = await Testimonial.find();
//     res.json(testimonials);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST a testimonial (optional)
// router.post('/api/testimonials', async (req, res) => {
//   const { name, feedback, image, role } = req.body;
//   const newTestimonial = new Testimonial({ name, feedback, image, role });

//   try {
//     const saved = await newTestimonial.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET all testimonials
router.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new testimonial
router.post('/api/testimonials', async (req, res) => {
  const { name, feedback, image, role } = req.body;
  const newTestimonial = new Testimonial({ name, feedback, image, role });

  try {
    const saved = await newTestimonial.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a testimonial by ID
router.put('/api/testimonials/:id', async (req, res) => {
  try {
    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a testimonial by ID
router.delete('/api/testimonials/:id', async (req, res) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.json({ message: 'Testimonial deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
