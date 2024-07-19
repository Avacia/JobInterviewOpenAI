import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 1rem;

  &::placeholder {
    color: #999;
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
