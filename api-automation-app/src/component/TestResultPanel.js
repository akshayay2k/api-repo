import React from 'react';
import './css/styles.css'; // Import CSS file for styling

const TestResultPanel = ({ testResults }) => {
  return (
    <div className="test-result-panel">
      <h2>Test Result Panel</h2>
      <ul>
        {testResults.map((result, index) => (
          <li key={index} className="test-case">
            <h3>Test Case {index + 1}</h3>
            <div className="test-details">
              <p><strong>Method:</strong> {result.testCase.method}</p>
              <p><strong>URL:</strong> {result.testCase.url}</p>
            </div>
            <div className="response">
              <p><strong>Response:</strong></p>
              <pre>{JSON.stringify(result.response, null, 2)}</pre>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestResultPanel;
