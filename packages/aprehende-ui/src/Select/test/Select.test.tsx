import { fireEvent, render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import Select from '../Select';

interface Country {
  value: string;
  label: string;
}

const countries: Country[] = [
  { value: 'MX', label: 'Mexico' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
];
describe('Select', () => {
  it('should render', () => {
    const { container } = render(
      <Select<Country>
        items={countries}
        renderItem={(item) => <div>{item.label}</div>}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should open the menu when clicking the input', () => {
    const { getByTestId } = render(
      <Select<Country>
        items={countries}
        renderItem={(item) => <div>{item.label}</div>}
      />
    );
    const input = getByTestId('apr-select-button');
    const menu = getByTestId('apr-select-menu');
    fireEvent.click(input);
    expect(menu).toHaveStyle('display: block');
  });

  it('should select an item when clicking on it', () => {
    const { getByText, getAllByRole, getByTestId } = render(
      <Select<Country>
        items={countries}
        renderItem={(item) => <div>{item.label}</div>}
      />
    );
    const input = getByText('Seleccione un país');
    const menu = getByTestId('apr-select-menu');
    fireEvent.click(input);
    expect(menu).toHaveStyle('display: block');
    const item = getAllByRole('option')[0];
    fireEvent.click(item);
    expect(menu).toHaveStyle('display: none');
    expect(getByText('Mexico')).toBeInTheDocument();
  });

  it('should call onChange when selecting an item', () => {
    const onChange = vi.fn();
    const { getByText, getAllByRole, getByTestId } = render(
      <Select<Country>
        items={countries}
        onChange={onChange}
        renderItem={(item) => <div>{item.label}</div>}
      />
    );
    const input = getByText('Seleccione un país');
    const menu = getByTestId('apr-select-menu');
    fireEvent.click(input);
    expect(menu).toHaveStyle('display: block');
    const item = getAllByRole('option')[0];
    fireEvent.click(item);
    expect(menu).toHaveStyle('display: none');
    expect(getByText('Mexico')).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith(countries[0]);
  });
});
