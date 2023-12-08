const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form'
  },
  userId: String,
  timestamp: { type: Date, default: Date.now },
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer'
  }],
});

module.exports = mongoose.model('Response', responseSchema);
