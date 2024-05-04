  import React from 'react';
  import RadioButton from './basictool/RadioButton.js';
  import DynamicFormDataFields from './DataFields/DynamicFormDataFields.js';
  import { useState } from 'react';
  import RawLabelContent from './DataFields/RawLabelContent.js';

  const BodyTypeRadioButtons = ({ bodyType, handleBodyTypeChange }) => {
    const [rawFormat, setRawFormat] = useState('json');
    const bodyTypes = [
      { id: 'None', label: 'None' },
      { id: 'form-data', label: 'form-data' },
      { id: 'x-www-form-urlencoded', label: 'x-www-form-urlencoded' },
      { id: 'raw', label: 'raw' },
      { id: 'binary', label: 'binary' },
      { id: 'GraphQL', label: 'GraphQL' },
    ];

    const [formDataFields, setFormDataFields] = useState([{ key: '', value: '', type: 'text' }]);


    return (
      <div className="body-type-radio-buttons">
        <h4>Body Type</h4>
        <div className="form-check">
          {bodyTypes.map((type) => (
            <div key={type.id} className="form-check form-check-inline">
              <RadioButton
                id={type.id}
                label={type.label}
                checked={bodyType === type.id}
                onChange={() => handleBodyTypeChange(type.id)}
              />
            </div>
          ))}
        </div>

        {bodyType === 'form-data' && (
          <div className="form-data-fields">
            {/* Additional fields for form-data */}
            <DynamicFormDataFields formDataFields={formDataFields} setFormDataFields={setFormDataFields} />
          </div>
        )}

        {bodyType === 'x-www-form-urlencoded' && (
          <div className="url-encoded-fields">
            {/* Additional fields for x-www-form-urlencoded */}
          </div>
        )}

        {bodyType === 'raw' && (
          <div className="raw-fields">
            <RawLabelContent selectedFormat={rawFormat} onSelectFormat={setRawFormat} />
            {/* Additional fields for x-www-form-urlencoded */}
          </div>
        )}

        {/* Add more conditions for other body types */}
      </div>
    );
  };

  export default BodyTypeRadioButtons;
