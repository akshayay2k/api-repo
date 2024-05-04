import React, { useState } from 'react';

const DynamicFormDataFields = ({ formDataFields, setFormDataFields }) => {
  const handleAddField = () => {
    setFormDataFields([...formDataFields, { key: '', value: '', type: 'text' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...formDataFields];
    newFields.splice(index, 1);
    setFormDataFields(newFields);
  };

  const handleFieldChange = (index, key, value) => {
    const newFields = [...formDataFields];
    newFields[index][key] = value;
    setFormDataFields(newFields);
  };

  return (
    <div className="form-data-fields">
      <h5>Form Data Fields</h5>
      {formDataFields.map((field, index) => (
        <div key={index} className="form-data-field d-flex align-items-center">
          <div className="input-group me-3">
            <span className="input-group-text">Key</span>
            <input
              type="text"
              className="form-control"
              placeholder="Key"
              value={field.key}
              onChange={(e) => handleFieldChange(index, 'key', e.target.value)}
            />
          </div>
          <div className="input-group me-1">
            <span className="input-group-text">Type</span>
            <select
              className="form-select small-dropdown"
              value={field.type}
              onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
            >
              <option value="text">Text</option>
              <option value="file">File</option>
            </select>
          </div>
          {field.type === 'file' ? (
            <div className="input-group me-3">
              <input
                type="file"
                className="form-control"
                onChange={(e) => handleFieldChange(index, 'value', e.target.files[0])}
              />
            </div>
          ) : (
            <div className="input-group me-3">
              <input
                type="text"
                className="form-control"
                placeholder="Value"
                value={field.value}
                onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
              />
            </div>
          )}
          <button type="button" className="btn btn-danger ms-3" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" className="btn btn-primary" onClick={handleAddField}>
        Add Field
      </button>
    </div>
  );
};

export default DynamicFormDataFields;
