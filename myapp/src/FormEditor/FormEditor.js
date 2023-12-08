// src/components/FormEditor.js
import React, { useState } from 'react';

import CategorizeQuestion from '../components/CategorizeQuestion/CategorizeQuestion';
import ClozeQuestion from '../components/ClozeQuestion/ClozeQuestion';
import ComprehensionQuestion from '../components/ComprehensionQuestion/ComprehensionQuestion';
import FormPreview from '../components/FormPreview/FormPreview';
import HeaderImage from '../components/HeaderImage/HeaderImage';


const FormEditor=()=>{
  const [headerImage, setHeaderImage] = useState(null);

  const handleHeaderImageChange = (file) => {
    setHeaderImage(file);
  };

  return (
    <div>
      <h1>Form Editor</h1>
      <HeaderImage onHeaderImageChange={handleHeaderImageChange}/> 
      <CategorizeQuestion/>
      <ClozeQuestion/>
      <ComprehensionQuestion/>
      <FormPreview/>
    </div>
  );
};

export default FormEditor;
