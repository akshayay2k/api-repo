import React, { useState } from 'react';
import axios from 'axios';
import ResponseDisplay from './component/ResponseDisplay.js';

function App() {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [headers, setHeaders] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);

  const handleRequest = async () => {
    try {
      const res = await axios.post('/api/request', { url, method, headers, body });
      setResponse(res.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1>API Testing Tool</h1>
      <div className="mb-3">
        <label htmlFor="url" className="form-label">URL</label>
        <input type="text" className="form-control" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="method" className="form-label">Method</label>
        <select className="form-select" id="method" value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="headers" className="form-label">Headers</label>
        <textarea
          className="form-control"
          id="headers"
          rows="3"
          value={JSON.stringify(headers, null, 2)} // Convert headers object to JSON string
          onChange={(e) => {
            try {
              setHeaders(JSON.parse(e.target.value)); // Parse JSON string to object
            } catch (error) {
              console.error('Invalid JSON:', error.message);
            }
          }}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Body</label>
        <textarea
          className="form-control"
          id="body"
          rows="3"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleRequest}>Send Request</button>
      {response && <ResponseDisplay response={response} />}
    </div>
  );
}

export default App;
