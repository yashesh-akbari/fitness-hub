// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const classesRoute = require('./routes/classes');
const pricingPlansRoute = require('./routes/pricingPlans');
const testimonialsRoute=require('./routes/testimonials')
const trainersRoute = require('./routes/trainers');
const scheduleRoute = require('./routes/schedule');
const blogsRoute = require('./routes/blogs');
const services=require('./routes/services');

const app = express();
require('dotenv').config();
// Middleware
app.use(cors());
app.use(express.json());

// Connect With the MongoDB Compass
// mongoose.connect('mongodb://localhost:27017/gymdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((error) => console.error('❌ MongoDB Atlas connection error:', error));


// Use Routes
app.use(classesRoute);
app.use(pricingPlansRoute);
app.use(testimonialsRoute);
app.use(trainersRoute);
app.use(scheduleRoute);
app.use(blogsRoute);
app.use(services);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
