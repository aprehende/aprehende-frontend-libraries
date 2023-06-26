import { PropsWithChildren } from 'react';

import { ChipContainer } from './Chip.styles';
import close from './close.svg';

interface ChipProps {
  onDelete?: () => void;
}

const Chip: React.FC<PropsWithChildren<ChipProps>> = ({
  children,
  onDelete,
}) => {
  return (
    <ChipContainer className="chip">
      {children}
      {onDelete && <img src={close} alt="close" onClick={onDelete} />}
    </ChipContainer>
  );
};

export default Chip;
