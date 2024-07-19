import styled from 'styled-components';

export const QuestionContainer = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Question = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Response = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;
