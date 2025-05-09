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

// app.get("/",(req,res)=>{
//   res.send(`<h1>Hello User,Api you can test on postmen,thunder client</h1>`);
// })

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Gym API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            color: #333;
            padding: 40px;
          }
          h1 {
            color: #0070f3;
          }
          ul {
            margin-top: 20px;
          }
          li {
            margin: 10px 0;
          }
          code {
            background: #eaeaea;
            padding: 2px 6px;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <h1>👋 Welcome to the Gym API</h1>
        <p>You can test the following API endpoints using <strong>Postman</strong> or <strong>Thunder Client</strong>:</p>
        <ul>
          <li><code>GET /api/blogs</code></li>
          <li><code>GET /api/trainers</code></li>
          <li><code>GET /api/schedule</code></li>
          <li><code>GET /api/pricing-plans</code></li>
          <li><code>GET /api/testimonials</code></li>
          <li><code>GET /api/classes</code></li>
          <li><code>GET /api/services</code></li>
        </ul>
        <p>Happy testing! 💪</p>
        <p>@2025 yashesh Akbari copyright 
      </body>
    </html>
  `);
});
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
