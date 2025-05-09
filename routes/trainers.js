// const express = require('express');
// const router = express.Router();
// const Trainer = require('../models/Trainer');

// // GET all trainers
// router.get('/api/trainers', async (req, res) => {
//   try {
//     const trainers = await Trainer.find();
//     res.json(trainers);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST a new trainer
// router.post('/api/trainers', async (req, res) => {
//   const { name, role, image } = req.body;

//   const newTrainer = new Trainer({ name, role, image });

//   try {
//     const savedTrainer = await newTrainer.save();
//     res.status(201).json(savedTrainer);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');

// GET all trainers
router.get('/api/trainers', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new trainer
router.post('/api/trainers', async (req, res) => {
  const { name, role, image } = req.body;

  const newTrainer = new Trainer({ name, role, image });

  try {
    const savedTrainer = await newTrainer.save();
    res.status(201).json(savedTrainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a trainer by ID
router.put('/api/trainers/:id', async (req, res) => {
  try {
    const updatedTrainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedTrainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }

    res.json(updatedTrainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a trainer by ID
router.delete('/api/trainers/:id', async (req, res) => {
  try {
    const deletedTrainer = await Trainer.findByIdAndDelete(req.params.id);

    if (!deletedTrainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }

    res.json({ message: 'Trainer deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;