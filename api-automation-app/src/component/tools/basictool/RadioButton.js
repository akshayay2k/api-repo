import React from 'react';


const RadioButton = ({ id, label, checked, onChange }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        id={id}
        checked={checked}
        value={id}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;