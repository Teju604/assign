// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

router.post('/forms', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Other routes for fetching and updating forms
