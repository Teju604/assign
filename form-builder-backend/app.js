// form-builder-backend/app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', formRoutes);

mongoose.connect('mongodb://localhost:27017/form', {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
});

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
