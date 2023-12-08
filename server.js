// server.js (or index.js)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./server/routes/formRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use form routes
app.use('/api', formRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
