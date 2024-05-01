import React, { useState } from 'react';
import axios from 'axios';

function ApiTestingTool() {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [response, setResponse] = useState('');

  const handleSendRequest = async () => {
    try {
      const res = await axios({
        method,
        url,
      });
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      setResponse(JSON.stringify(error.response.data, null, 2));
    }
  };

  return (
    <div>
      <h1>API Testing Tool</h1>
      <input
        type="text"
        placeholder="Enter API URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <button onClick={handleSendRequest}>Send Request</button>
      <pre>{response}</pre>
    </div>
  );
}

export default ApiTestingTool;
