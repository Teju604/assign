// form-builder-backend/routes/formRoutes.js
const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Create a new form
router.post('/forms', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get form by ID
router.get('/forms/:formId', async (req, res) => {
  try {
    const form = await Form.findById(req.params.formId);
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add more routes for updating and deleting forms if needed

module.exports = router;
