// components/BodyTextarea.js
import React from 'react';

function BodyTextarea({ value, onChange }) {
  return <textarea value={value} onChange={onChange} />;
}

export default BodyTextarea;
