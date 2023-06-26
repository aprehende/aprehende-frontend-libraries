import styled from '@emotion/styled';

const tooltipTextColor = '#fff';
const tooltipBackgroundColor = '#000';
const tooltipMargin = '30px';
const tooltipArrowSize = '6px';

export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const TooltipContent = styled.div<{
  direction: 'top' | 'bottom' | 'left' | 'right';
}>`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: ${tooltipTextColor};
  background: ${tooltipBackgroundColor};
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;

  &::before {
    content: ' ';
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: ${tooltipArrowSize};
    margin-left: calc(${tooltipArrowSize} * -1);
  }

  ${({ direction }) => {
    switch (direction) {
      case 'top':
        return `
          top: calc(${tooltipMargin} * -1);
          &::before {
            top: 100%;
            border-top-color: ${tooltipBackgroundColor};
          }
          `;
      case 'right':
        return `
          left: calc(100% + ${tooltipMargin});
          top: 50%;
          transform: translateX(0) translateY(-50%);
          &::before {
            left: calc(${tooltipArrowSize} * -1);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-right-color: ${tooltipBackgroundColor};
          }
        `;
      case 'bottom':
        return `
          bottom: calc(${tooltipMargin} * -1);
          &::before {
            bottom: 100%;
            border-bottom-color: ${tooltipBackgroundColor};
          }
        `;
      case 'left':
        return `
          left: auto;
          right: calc(100% + ${tooltipMargin});
          top: 50%;
          transform: translateX(0) translateY(-50%);
          &::before {
            left: auto;
            right: calc(${tooltipArrowSize} * -2); 
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-left-color: ${tooltipBackgroundColor};
          }
        `;
    }
  }}
`;
