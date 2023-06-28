import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Steps from '../Steps';

const current = 2;
const steps = [{ title: 'Paso 1' }, { title: 'Paso 2' }, { title: 'Paso 3' }];

describe('Steps', () => {
  it('should render correctly', () => {
    const { container } = render(<Steps current={current} items={steps} />);
    expect(container).toMatchSnapshot();
  });

  it('should render icon when step is done', () => {
    const { getByTestId } = render(<Steps current={current} items={steps} />);
    expect(getByTestId('step-icon')).toBeInTheDocument();
  });

  it('should not render icon when step is not done', () => {
    const { queryByTestId } = render(<Steps current={1} items={steps} />);
    expect(queryByTestId('step-icon')).not.toBeInTheDocument();
  });
});
