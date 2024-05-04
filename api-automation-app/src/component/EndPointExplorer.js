import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import generateTabContent from './tools/generateTabContent.js';
import TabContentValues from './tools/TabContentValues.js';
import HeaderSelector from './tools/HeaderSelector.js';
import DropDown from './tools/DropDown.js';
import generateHeaders  from './tools/generateHeaders.js';
import BodyTypeRadioButtons from './tools/BodyTypeRadioButtons.js';

const EndPointExplorer = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');
  const [activeTab, setActiveTab] = useState('#params');
  const [authorization, setAuthorization] = useState('None');
  const [headers, setHeaders] = useState({});
  const [contentType, setContentType] = useState('application/json');
  const [bodyType, setBodyType] = useState('None');
  const [formDataFields, setFormDataFields] = useState([]);

  const handleBodyTypeChange = (newBodyType) => {
    setBodyType(newBodyType);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleMethodChange = (value) => {
    setMethod(value);
  };

  const handleSendRequest = async () => {
    try {
      // Construct the URL with parameters
      const queryParams = new URLSearchParams();
      formDataFields.forEach((field) => {
        queryParams.append(field.key, field.value);
      });
      let constructedUrl = url + '?' + queryParams.toString();

      // Make the request using axios
      const response = await axios({
        method: method,
        url: constructedUrl,
        // For GET requests, the data field should be left empty
        // as the parameters are already included in the URL
        data: method === 'GET' ? undefined : body,
        headers: generateHeaders(authorization, contentType),
      });

      // Check if response.data is defined before accessing it
    if (response?.data) {
      // Filter the response based on the formDataFields
      const filteredResponse = response.data.filter(item => {
        // Check if all formDataFields match the corresponding properties in the response
        return formDataFields.every(field => item[field.key] === field.value);
      });

      setResponse(JSON.stringify(filteredResponse, null, 2));
    } else {
      // Handle the case where response.data is undefined
      setResponse('Response data is undefined.');
    }
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    setResponse(JSON.stringify(error.response?.data || error.message, null, 2));
  }
};
     

  const handleClear = () => {
    setUrl('');
    setBody('');
    setResponse('');
    //setHeaders({}); // Clear headers when clearing the form
  };

  const methodOptions = [
    { value: 'GET', label: 'GET' },
    { value: 'POST', label: 'POST' },
    { value: 'PUT', label: 'PUT' },
    { value: 'DELETE', label: 'DELETE' }
  ];

  const handleQueryParamChange = (newFormDataFields) => {
    setFormDataFields(newFormDataFields);
  };

  const tabs = [
    { 
      id: 'params', 
      label: 'Params', 
      content: <TabContentValues formDataFields={formDataFields} setFormDataFields={handleQueryParamChange} />
    },
    { 
      id: 'auth', 
      label: 'Auth', 
      content: (
        <div>
          <label htmlFor="authType">Authorization Type:</label>
          <select id="authType" className="form-select" value={authorization} onChange={(e) => setAuthorization(e.target.value)}>
            <option value="None">None</option>
            <option value="Basic">Basic</option>
            <option value="Bearer">Bearer</option>
          </select>
        </div>
      )
    },  
    { 
      id: 'header', 
      label: 'Header', 
      content: <HeaderSelector headers={headers} setHeaders={setHeaders} authorization={authorization}/> //Render the HeaderSelector component 
    },

    { 
      id: 'body', 
      label: 'Body', 
      content: (
        <div className="body-type-radio-buttons">
          <BodyTypeRadioButtons bodyType={bodyType} handleBodyTypeChange={handleBodyTypeChange} />
        </div>
      )
    }
  ];

  return (
    <div className="container">
      <h2>End Point Explorer</h2>
      <div className="row mb-4">
        <div className="col-md-2">
          <label htmlFor="method" className="form-label">Method:</label>
          <DropDown id="method" value={method} options={methodOptions} onChange={(value) => handleMethodChange(value)} />
        </div>
        <div className="col-md-4">
          <label htmlFor="url" className="form-label">URL:</label>
          <input type="text" className="form-control" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <div className="col-md-2 d-flex align-items-end justify-content-end">
          <button className="btn btn-primary me-2 " onClick={handleSendRequest}>Send</button>
          <button className="btn btn-secondary " onClick={handleClear}>Clear</button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          {generateTabContent(tabs, activeTab, handleTabClick)}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-8">
          <h3>Response:</h3>
          <pre>{response}</pre>
        </div>
      </div>
    </div>
  );
};

export default EndPointExplorer;
