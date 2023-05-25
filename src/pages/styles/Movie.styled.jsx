import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  gap: 20px;

  input {
    min-height: 45px;
    padding: 16px 24px;
    font-size: 20px;
    font-weight: 500;
    border: 1px solid purple;
    border-radius: 15px;
  }

  button {
    min-height: 45px;
    border: 1px solid green;
    border-radius: 15px;
    background-color: aqua;
    cursor: pointer;
    padding: 4px 16px;
  }
`;
