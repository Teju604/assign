const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  content: String,
});

module.exports = mongoose.model('Option', optionSchema);