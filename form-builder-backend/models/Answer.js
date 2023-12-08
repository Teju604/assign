const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  },
  type: String,
  content: String,
  selectedOptions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Option'
  }],
  correct: Boolean,
});

module.exports = mongoose.model('Answer', answerSchema);