import { renderHook } from '@testing-library/react';
import { describe, it } from 'vitest';

import useAvatar from '../useAvatar';

describe('useAvatar', () => {
  it('should be defined', () => {
    expect(useAvatar).toBeDefined();
  });

  const { result } = renderHook(() => useAvatar());

  it('should return JP initials ', () => {
    expect(result.current.getInitials('Juan Perez')).toBe('JP');
  });

  it('should return J initials ', () => {
    expect(result.current.getInitials('Juan')).toBe('J');
  });

  it('should return empty string ', () => {
    expect(result.current.getInitials('')).toBe('');
  });

  it('should return JJ initials ', () => {
    expect(result.current.getInitials('Jose Ricardo Jimenez')).toBe('JJ');
  });
});
