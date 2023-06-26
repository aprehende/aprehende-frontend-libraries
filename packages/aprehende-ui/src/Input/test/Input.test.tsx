import { fireEvent, render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import Input from '../Input';

describe('Input', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Input placeholder="Email" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('placeholder should be Email', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Email" />);
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
  });

  it('should render startRender', () => {
    const { getByText } = render(
      <Input placeholder="Email" startRender={<span>0/50</span>} />
    );
    expect(getByText('0/50')).toBeInTheDocument();
  });

  it('should render endRender', () => {
    const { getByText } = render(
      <Input placeholder="Email" endRender={<span>0/50</span>} />
    );
    expect(getByText('0/50')).toBeInTheDocument();
  });

  it('onChangeFunc should be called', () => {
    const onChangeFunc = vi.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Email" onChange={onChangeFunc} />
    );
    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: 'test' },
    });
    expect(onChangeFunc).toHaveBeenCalled();
  });

  it('should render with 100% width', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Email" widthFull />
    );
    expect(getByPlaceholderText('Email')).toHaveStyle('width: 100%');
  });
});
