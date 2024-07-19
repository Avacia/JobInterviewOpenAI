import React from 'react';
import JobTitle from './JobTitle';
import InterviewerQuestion from './InterviewerQuestion';
import ResponseInput from './ResponseInput';
import { Container } from '../styles/AIInterviewerLayout';

const AIInterviewerLayout = () => {
  return (
    <Container>
      <JobTitle jobTitle="Junior Developer" />
      <InterviewerQuestion
        question="Tell me about yourself."
        response="I'm passionate about software development. I joined Mission Ready earlier this year, and decided to switch from a chef to a fulltime software developer."
      />
      <InterviewerQuestion
        question="What aspects of software development made you passionate about it?"
        response={
          <ResponseInput
            placeholder="I'm passionate because I"
            submitButtonText="Submit"
          />
        }
      />
    </Container>
  );
};

export default AIInterviewerLayout;
