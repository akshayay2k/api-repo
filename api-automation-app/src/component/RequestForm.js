// components/RequestForm.js

import React, { useState } from 'react';
import axios from 'axios';
import ResponseContent from './ResponseContent.js'; 

const RequestForm = () => {
  const [baseURL, setBaseURL] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${baseURL}${endpoint}`);
      setResponse(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Base URL:
          <input type="text" value={baseURL} onChange={(e) => setBaseURL(e.target.value)} />
        </label>
        <label>
          Endpoint:
          <input type="text" value={endpoint} onChange={(e) => setEndpoint(e.target.value)} />
        </label>
        <button type="submit">Send Request</button>
      </form>
      {response && (
        <div>
          <h2>Response</h2>
          <ResponseContent htmlContent={response} />
        </div>
      )}
    </div>
  );
};

export default RequestForm;
