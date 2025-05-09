const mongoose = require('mongoose');

const pricingPlanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  features: { type: [String], required: true },
  isPopular: { type: Boolean, default: false }
});

module.exports = mongoose.model('PricingPlan', pricingPlanSchema,'pricingPlans');
