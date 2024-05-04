const generateHeaders = (authorization, contentType, additionalHeaders = {}) => {
    const headers = {
      'Content-Type': contentType,
      ...additionalHeaders,
    };
  
    if (authorization === 'Basic') {
      const { Username, Password, ...rest } = additionalHeaders;
      headers['Authorization'] = `Basic ${btoa(`${Username}:${Password}`)}`;
    } else if (authorization === 'Bearer') {
      // Assuming you have a token stored in the additionalHeaders object
      const { token, ...rest } = additionalHeaders;
      headers['Authorization'] = `Bearer ${token}`;
    }
  
    return headers;
  };
  
  export default generateHeaders;
  