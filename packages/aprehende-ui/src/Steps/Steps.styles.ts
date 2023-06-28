import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
`;

export const StepItem = styled.div<{
  done?: boolean;
  current?: boolean;
}>`
  display: flex;
  gap: clamp(0.25rem, 2vw, 0.5rem);
  align-items: center;
  &:before {
    content: '';
    display: block;
    width: ${({ done }) => (done ? '0' : 'clamp(1.5rem, 5vw, 3rem);')};
    height: ${({ done }) => (done ? '0' : 'clamp(1.5rem, 5vw, 3rem);')};
    border-radius: 50%;
    border: ${({ done, current }) =>
      done ? 'none' : current ? '2px solid #e0e0e0' : '1px solid #e0e0e0'};
  }

  & > svg {
    width: clamp(1.5rem, 5vw, 3rem);
    height: clamp(1.5rem, 5vw, 3rem);
  }

  &:not(:last-child) {
    flex: 1;

    &:after {
      content: '';
      position: relative;
      z-index: -1;
      height: 2px;
      background-color: #e0e0e0;
      flex: 1;
      margin-right: 0.5rem;
    }
  }
`;

export const StepTitle = styled.h3`
  font-weight: bold;
  font-size: clamp(1rem, 4vw, 1.25rem);
`;
