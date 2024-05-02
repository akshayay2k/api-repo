// components/MethodDropdown.js
import React from 'react';

function MethodDropdown({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="GET">GET</option>
      <option value="POST">POST</option>
      <option value="PUT">PUT</option>
      <option value="DELETE">DELETE</option>
    </select>
  );
}

export default MethodDropdown;
