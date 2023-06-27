import styled from '@emotion/styled';

export const SelectContainer = styled.div`
  padding: 8px;
  outline: none;
  cursor: pointer;
  border: 1px solid #dbdbdb;
  position: relative;
  width: fit-content;
  border-radius: 3px;
`;

export const ListOfOptions = styled.div<{ isOpen?: boolean }>`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  cursor: pointer;
  overflow-y: auto;
  margin-top: 38px;
  min-width: 110px;
  max-height: 180px;
  position: absolute;
  border-radius: 3px;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  & > * {
    padding: 5px 8px;
  }
  & > *:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const LabelOptionSelected = styled.div`
  display: flex;
  position: relative;
  color: #0f172a;
  width: fit-content;
  min-width: 110px;
  align-items: center;
  & > div {
    display: block;
    flex: 1;
    margin-right: 8px;
  }
`;

export const LabelOptionHide = styled.div`
  color: #0f172a;
  margin-right: 8px;
  flex: 1;
  min-width: 110px;
`;
