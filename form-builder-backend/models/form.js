const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: String,
  headerImage: String,
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }],
});

module.exports = mongoose.model('Form', formSchema);