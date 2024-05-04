import React, { useState } from 'react';

const RawLabelContent = ({ selectedFormat, onSelectFormat }) => {
  const formats = ['Text', 'JavaScript', 'JSON', 'HTML', 'XML'];
  const [jsonInput, setJsonInput] = useState('');
  const [isJsonValid, setIsJsonValid] = useState(true);

  // Function to handle changes in the paste JSON input field
  const handleJsonInputChange = (e) => {
    const input = e.target.value;
    setJsonInput(input);
    // Validate JSON syntax
    try {
      JSON.parse(input);
      setIsJsonValid(true);
    } catch (error) {
      setIsJsonValid(false);
    }
  };

  // Function to handle paste events and validate JSON syntax
  const handlePaste = (e) => {
    const pastedText = (e.clipboardData || window.clipboardData).getData('text');
    try {
      JSON.parse(pastedText);
      setIsJsonValid(true);
    } catch (error) {
      setIsJsonValid(false);
    }
  };

  return (
    <div className="raw-label-content">
      <label htmlFor="rawFormat" className="form-label">Format:</label>
      <select
        id="rawFormat"
        className="form-select"
        value={selectedFormat}
        onChange={(e) => onSelectFormat(e.target.value)}
      >
        {formats.map((format) => (
          <option key={format} value={format}>{format}</option>
        ))}
      </select>
      {/* File input for uploading JSON files */}
      <input
        type="file"
        accept=".json" // Allow only JSON files
        className="form-control ms-2" // Add margin to the input field
        onChange={(e) => {
          const file = e.target.files[0];
          // Handle file upload if needed
        }}
      />
      {/* Input field for pasting JSON data */}
      <textarea
        className={`form-control ms-2 ${!isJsonValid && 'is-invalid'}`} // Add margin and error class
        placeholder="Paste JSON data here"
        value={jsonInput}
        onChange={handleJsonInputChange}
        onPaste={handlePaste} // Listen for paste event
      />
      {!isJsonValid && <div className="invalid-feedback">Invalid JSON syntax</div>}
    </div>
  );
};

export default RawLabelContent;
