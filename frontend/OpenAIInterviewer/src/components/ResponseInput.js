import React, { useState } from 'react';
import { InputContainer, Input, SubmitButton } from '../styles/ResponseInput';

const ResponseInput = ({ placeholder, submitButtonText }) => {
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    // Handle the submission of the response
    console.log('Submitted response:', response);
  };

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder={placeholder}
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <SubmitButton onClick={handleSubmit}>{submitButtonText}</SubmitButton>
    </InputContainer>
  );
};

export default ResponseInput;
