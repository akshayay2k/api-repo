import React from 'react';

const DropDown = ({ id, value, options, onChange }) => {
  return (
    <select id={id} className="form-select" value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default DropDown;
