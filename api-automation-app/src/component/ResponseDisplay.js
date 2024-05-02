// components/ResponseDisplay.js
import React from 'react';

function ResponseDisplay({ response }) {
  return <pre>{JSON.stringify(response, null, 2)}</pre>;
}

export default ResponseDisplay;
