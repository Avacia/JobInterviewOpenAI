import React from 'react';
import { QuestionContainer, Question, Response } from '../styles/InterviewerQuestion';

const InterviewerQuestion = ({ question, response }) => {
  return (
    <QuestionContainer>
      <Question>{question}</Question>
      <Response>{response}</Response>
    </QuestionContainer>
  );
};

export default InterviewerQuestion;
