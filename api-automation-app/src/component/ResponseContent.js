import React from 'react';

const ResponseContent = ({ htmlContent }) => {
  return (
    <div>
      <h3>Response Content:</h3>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default ResponseContent;
