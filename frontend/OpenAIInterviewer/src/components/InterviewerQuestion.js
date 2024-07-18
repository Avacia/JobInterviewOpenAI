// InterviewerQuestion.js
import React from 'react';

const InterviewerQuestion = ({ question, response }) => {
  return (
    <div>
      <p>{question}</p>
      <div>{response}</div>
    </div>
  );
};

export default InterviewerQuestion;