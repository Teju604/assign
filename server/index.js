// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/form-builder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formSchema = new mongoose.Schema({
  headerImage: String,
  questions: [{ type: mongoose.Schema.Types.Mixed }],
});

const Form = mongoose.model('Form', formSchema);

app.post('/api/forms', async (req, res) => {
  const { headerImage, questions } = req.body;

  try {
    const newForm = new Form({ headerImage, questions });
    const savedForm = await newForm.save();
    res.json(savedForm);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
