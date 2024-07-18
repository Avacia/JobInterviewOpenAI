// ResponseInput.js
import React, { useState } from 'react';

const ResponseInput = ({ placeholder, submitButtonText }) => {
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    // Handle the submission of the response
    console.log('Submitted response:', response);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <button onClick={handleSubmit}>{submitButtonText}</button>
    </div>
  );
};

export default ResponseInput;