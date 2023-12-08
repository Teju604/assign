// src/components/HeaderImage.js
import React from 'react';

const HeaderImage = () => {
  return (
    <div>
      <label htmlFor="header-image">Header Image:</label>
      <input type="file" id="header-image" accept="image/*" />
    </div>
  );
};

export default HeaderImage;
