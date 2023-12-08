import React, { useState } from 'react';

const CategorizeQuestion = () => {
  const [categories, setCategories] = useState('');
  const [optionsList, setOptionsList] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [feedback, setFeedback] = useState('');
  const [points, setPoints] = useState(0);

  const handleCategoriesChange = (e) => {
    setCategories(e.target.value);
  };

  const handleOptionsListChange = (e) => {
    setOptionsList(e.target.value);
    // Extract items from the options list
    const itemsArray = e.target.value.split('\n');
    setItems(itemsArray);
  };

  const handleCategorySelect = (itemIndex, category) => {
    const updatedCategories = [...selectedCategories];
    updatedCategories[itemIndex] = category;
    setSelectedCategories(updatedCategories);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handlePointsChange = (e) => {
    setPoints(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h2>Categorize Question</h2>

      <div>
        <label>Categories:</label>
        <input type="text" value={categories} onChange={handleCategoriesChange} />
      </div>

      <div>
        <label>Options List:</label>
        <textarea value={optionsList} onChange={handleOptionsListChange} />
      </div>

      <div>
        <label>Category Dropdown:</label>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}:
              <select onChange={(e) => handleCategorySelect(index, e.target.value)}>
                <option value="">Select Category</option>
                {categories.split('\n').map((category, categoryIndex) => (
                  <option key={categoryIndex} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label>Description:</label>
        <textarea value={description} onChange={handleDescriptionChange} />
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

export default CategorizeQuestion;
