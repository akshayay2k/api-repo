import React, { useState } from 'react';
import './css/TestExecutionPanel.css'; // Import CSS file

const TestExecutionPanel = ({ testCases, setTestCases, runTests }) => {
  const [testCase, setTestCase] = useState({ method: 'GET', url: '', data: '' });

  const addTestCase = () => {
    // Create a new test case object with the current method, URL, and data
    const newTestCase = { method: testCase.method, url: testCase.url, data: testCase.data };
  
    // Update the testCases state by adding the new test case
    setTestCases(prevTestCases => [...prevTestCases, newTestCase]);
  
    // Reset testCase state to default values
    setTestCase({ method: 'GET', url: '', data: '' });
  };
  
  
  const handleMethodChange = (e) => {
    // Update the method value in testCase state
    setTestCase({ ...testCase, method: e.target.value });
  };

  const handleUrlChange = (e) => {
    // Update the url value in testCase state
    setTestCase({ ...testCase, url: e.target.value });
  };

  const handleDataChange = (e) => {
    // Update the data value in testCase state
    setTestCase({ ...testCase, data: e.target.value });
  };

  return (
    <div className="test-execution-panel">
      <h2>Test Execution Panel</h2>
      <div className="form-group">
        <label>Method:</label>
        <select
          className="form-control"
          value={testCase.method}
          onChange={handleMethodChange} // Use the method change handler
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
      <div className="form-group">
        <label>URL:</label>
        <input
          type="text"
          className="form-control"
          value={testCase.url}
          onChange={handleUrlChange} // Use the url change handler
        />
      </div>
      <div className="form-group">
        <label>Data:</label>
        <textarea
          className="form-control"
          value={testCase.data}
          onChange={handleDataChange} // Use the data change handler
        />
      </div>
      <button className="btn btn-primary" onClick={addTestCase}>Add Test Case</button>
      <button className="btn btn-success" onClick={runTests}>Run Tests</button>
    </div>
  );
};

export default TestExecutionPanel;
