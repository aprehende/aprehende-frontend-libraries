import styled from '@emotion/styled';

export const InputContainer = styled.div<{ fullWidth?: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '250px')};
  box-sizing: border-box;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
  & > input {
    margin: 0;
    padding: 0;
    width: 100%;
    border: none;
    outline: none;
    margin-right: 10px;
  }
`;
