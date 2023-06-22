import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import Button from '../Button';

describe('Button', () => {
  it('should render the button with the text', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('should execute the onClick function', () => {
    const fn = vi.fn();
    const { getByText } = render(<Button onClick={fn}>Click me</Button>);
    getByText('Click me').click();
    expect(fn).toHaveBeenCalled();
  });

  it('should render the "component" in startRender prop', () => {
    const { getByText } = render(
      <Button startRender={<span>Start</span>}>Click me</Button>
    );
    expect(getByText('Start')).toBeInTheDocument();
  });

  it('should render the "component" in endRender prop', () => {
    const { getByText } = render(
      <Button endRender={<span>End</span>}>Click me</Button>
    );
    expect(getByText('End')).toBeInTheDocument();
  });
});
