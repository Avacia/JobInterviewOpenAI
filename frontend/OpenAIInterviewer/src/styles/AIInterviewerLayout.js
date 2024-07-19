import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
