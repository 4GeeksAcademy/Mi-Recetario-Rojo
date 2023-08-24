import React from 'react';

function RecipeInputField({ placeholder, value, onChange, type }) {
  return (
    <input
      type={type || 'text'}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="border border-1 p-2 rounded-md"
    />
  );
}

export default RecipeInputField;
