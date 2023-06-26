import React, { PropsWithChildren, useState } from 'react';

import { TooltipContent, TooltipWrapper } from './Tooltip.styles';

interface TooltipProps {
  delay?: number;
  content: string;
  direction?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({
  delay,
  content,
  children,
  direction,
}) => {
  let timeout: string | number | NodeJS.Timeout | undefined;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && (
        <TooltipContent direction={direction || 'top'}>
          {content}
        </TooltipContent>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
