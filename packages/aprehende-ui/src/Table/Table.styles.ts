import styled from '@emotion/styled';

export const THead = styled.thead<{ isSticky?: boolean; top: string }>`
  width: 100%;
  box-sizing: border-box;
  position: ${({ isSticky }) => isSticky && 'sticky'};
  top: ${({ top }) => top};
`;

export const THeader = styled.tr`
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  cursor: pointer;
  align-items: center;
  background: #dfe6e9;
  align-self: stretch;
  border-radius: 4px 4px 0 0;
  justify-content: space-between;
`;

export const TableStyled = styled.table`
  width: 100%;
  display: flex;
  border-radius: 4px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #cbd5e1;
`;

export const TH = styled.th<{ customWidth?: string; isActions?: boolean }>`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 10px;

  text-align: left;
  ${({ isActions }) =>
    isActions &&
    `display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 70px;
    padding: 0;
    `}
`;

export const ContainerRow = styled.tr`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  text-align: center;
`;

export const TD = styled.td<{ customWidth?: string; isActions?: boolean }>`
  width: 100%;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  text-align: left;
  ${({ isActions }) =>
    isActions &&
    `display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 70px;
    padding: 0;
    `}
`;

export const TBody = styled.tbody`
  width: 100%;
  overflow-y: auto;
  overflow-x: auto;
  box-sizing: border-box;
`;
