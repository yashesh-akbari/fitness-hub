// const express = require('express');
// const router = express.Router();
// const PricingPlan = require('../models/PricingPlan');

// // GET all pricing plans
// router.get('/api/pricing-plans', async (req, res) => {
//   try {
//     const plans = await PricingPlan.find();
//     res.json(plans);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST a new pricing plan
// router.post('/api/pricing-plans', async (req, res) => {
//   const { title, price, features, isPopular } = req.body;

//   const newPlan = new PricingPlan({
//     title,
//     price,
//     features,
//     isPopular
//   });

//   try {
//     const savedPlan = await newPlan.save();
//     res.status(201).json(savedPlan);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const PricingPlan = require('../models/PricingPlan');

// GET all pricing plans
router.get('/api/pricing-plans', async (req, res) => {
  try {
    const plans = await PricingPlan.find();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new pricing plan
router.post('/api/pricing-plans', async (req, res) => {
  const { title, price, features, isPopular } = req.body;

  const newPlan = new PricingPlan({
    title,
    price,
    features,
    isPopular
  });

  try {
    const savedPlan = await newPlan.save();
    res.status(201).json(savedPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a pricing plan by ID
router.put('/api/pricing-plans/:id', async (req, res) => {
  try {
    const updatedPlan = await PricingPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedPlan) {
      return res.status(404).json({ message: 'Pricing plan not found' });
    }

    res.json(updatedPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a pricing plan by ID
router.delete('/api/pricing-plans/:id', async (req, res) => {
  try {
    const deletedPlan = await PricingPlan.findByIdAndDelete(req.params.id);

    if (!deletedPlan) {
      return res.status(404).json({ message: 'Pricing plan not found' });
    }

    res.json({ message: 'Pricing plan deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
