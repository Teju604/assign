import React, { useState } from 'react';

const ComprehensionQuestion = () => {
  const [contentType, setContentType] = useState('Comprehension');
  const [instructions, setInstructions] = useState('');
  const [passage, setPassage] = useState('');
  const [media, setMedia] = useState('');
  const [points, setPoints] = useState(0);

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };

  const handlePassageChange = (e) => {
    setPassage(e.target.value);
  };

  const handleMediaChange = (e) => {
    setMedia(e.target.value);
  };

  const handlePointsChange = (e) => {
    setPoints(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h2>Comprehension Question</h2>

      <div>
        <label>Content Type:</label>
        <select value={contentType} onChange={(e) => setContentType(e.target.value)}>
          <option value="Comprehension">Comprehension</option>
          {/* Add other content types if needed */}
        </select>
      </div>

      <div>
        <label>Instructions:</label>
        <textarea value={instructions} onChange={handleInstructionsChange} />
      </div>

      <div>
        <label>Passage:</label>
        <textarea value={passage} onChange={handlePassageChange} />
      </div>

      <div>
        <label>Media:</label>
        <select value={media} onChange={handleMediaChange}>
          <option value="image">Image</option>
          <option value="audio">Audio</option>
          <option value="video">Video</option>
        </select>
      </div>

      <div>
        <label>Points:</label>
        <input type="number" value={points} onChange={handlePointsChange} />
      </div>
    </div>
  );
};

export default ComprehensionQuestion;
