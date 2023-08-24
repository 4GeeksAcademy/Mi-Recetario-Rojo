import React from 'react';

function RecipeCheckbox({ label, checked, onChange }) {
  return (
    <div className="m-2">
      <label htmlFor="">{label}</label>
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        className="border border-1 p-2 rounded-md m-1"
      />
    </div>
  );
}

export default RecipeCheckbox;
