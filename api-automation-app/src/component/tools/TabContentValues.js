import React from 'react';

const TabContentValues = ({ formDataFields, setFormDataFields }) => {
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = formDataFields.map((field, i) => (i === index ? { ...field, [name]: value } : field));
    setFormDataFields(updatedFields);
  };

  const handleAddQueryParam = () => {
    setFormDataFields([...formDataFields, { key: '', value: '' }]);
  };

  const handleRemoveQueryParam = (index) => {
    const updatedFields = formDataFields.filter((_, i) => i !== index);
    setFormDataFields(updatedFields);
  };

  return (
    <div className="tab-pane fade show active" id="params">
      {formDataFields.map((queryParam, index) => (
        <div key={index} className="row mb-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="key"
              value={queryParam.key}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Key"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="value"
              value={queryParam.value}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Value"
            />
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => handleRemoveQueryParam(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={handleAddQueryParam}>
        Add Query Param
      </button>
    </div>
  );
};

export default TabContentValues;
