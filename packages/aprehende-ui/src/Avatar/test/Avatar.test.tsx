import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Avatar from '../Avatar';

describe('Avatar', () => {
  it('should render the initials', () => {
    const { getByText } = render(<Avatar name="Jordan Ruben" />);

    expect(getByText('JR')).toBeInTheDocument();
  });

  it('snapshot with picture and name', () => {
    const { container } = render(
      <Avatar
        name="Jordan Ruben"
        picture="https://cdn4.buysellads.net/uu/1/134955/1685040267-designdotdev5.jpg"
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('snapshot with name', () => {
    const { container } = render(<Avatar name="Jordan Ruben" />);

    expect(container).toMatchSnapshot();
  });

  it('should return error if name is not provided', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => render(<Avatar />)).toThrowError();
  });
});
