// models/Form.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: String,
  // Add more fields based on question types
});
const optionSchema = new mongoose.Schema({
  type: String,
  // Add more fields based on question types
});


const formSchema = new mongoose.Schema({
  headerImage: String,
  questions: [questionSchema],
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
