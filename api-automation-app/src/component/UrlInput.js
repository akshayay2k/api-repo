// components/UrlInput.js
import React from 'react';

function UrlInput({ value, onChange }) {
  return <input type="text" value={value} onChange={onChange} />;
}

export default UrlInput;
