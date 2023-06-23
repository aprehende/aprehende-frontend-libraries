import { useMemo } from 'react';

import { AvatarStyled, AvatarTextStyled } from './Avatar.styles';
import { useAvatar } from './hooks';

interface AvatarProps {
  name: string;
  picture?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, picture }) => {
  const { getInitials } = useAvatar();

  const initials = useMemo(() => getInitials(name), [getInitials, name]);

  return (
    <AvatarStyled picture={picture}>
      {!picture && <AvatarTextStyled>{initials}</AvatarTextStyled>}
    </AvatarStyled>
  );
};

export default Avatar;
