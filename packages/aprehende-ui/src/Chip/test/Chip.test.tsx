import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import Chip from '../Chip';

describe('Chip', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Chip>Chip</Chip>);
    expect(container).toMatchSnapshot();
  });

  it('should not render close icon', () => {
    const { queryByAltText } = render(<Chip>Chip</Chip>);
    expect(queryByAltText('close')).not.toBeInTheDocument();
  });

  it('should render the chip with the text', () => {
    const { getByText } = render(<Chip>Chip</Chip>);
    expect(getByText('Chip')).toBeInTheDocument();
  });

  it('should render close icon', () => {
    const fn = vi.fn();
    const { getByAltText } = render(<Chip onDelete={fn}>Chip</Chip>);
    expect(getByAltText('close')).toBeInTheDocument();
  });

  it('should execute the onDelete function', () => {
    const fn = vi.fn();
    const { getByAltText } = render(<Chip onDelete={fn}>Chip</Chip>);
    getByAltText('close').click();
    expect(fn).toHaveBeenCalled();
  });
});
