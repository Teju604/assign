import React, { useState } from 'react';

const ClozeQuestion = () => {
  const [sentence, setSentence] = useState('');
  const [underlinedWords, setUnderlinedWords] = useState([]);
  const [options, setOptions] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [points, setPoints] = useState(0);

  const handleSentenceChange = (e) => {
    setSentence(e.target.value);
    // Extract words to be replaced (underlined) from the sentence
    const wordsToReplace = e.target.value.match(/[\w'-]+/g) || [];
    setUnderlinedWords(wordsToReplace);
    // Automatically add underlined words as options
    setOptions(wordsToReplace.map((word) => ({ text: word, isCorrect: true })));
  };

  const handleOptionsChange = (index, e) => {
    const updatedOptions = [...options];
    updatedOptions[index].text = e.target.value;
    setOptions(updatedOptions);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handlePointsChange = (e) => {
    setPoints(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h2>Cloze Question</h2>

      <div>
        <label>Sentence:</label>
        <textarea value={sentence} onChange={handleSentenceChange} />
      </div>

      <div>
        <label>Options:</label>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <input
                type="text"
                value={option.text}
                onChange={(e) => handleOptionsChange(index, e)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label>Feedback:</label>
        <textarea value={feedback} onChange={handleFeedbackChange} />
      </div>

      <div>
        <label>Points:</label>
        <input type="number" value={points} onChange={handlePointsChange} />
      </div>
    </div>
  );
};

export default ClozeQuestion;
