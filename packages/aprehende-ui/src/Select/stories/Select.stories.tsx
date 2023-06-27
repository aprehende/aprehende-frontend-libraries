import type { Meta, StoryObj } from '@storybook/react';

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

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [(story) => <div style={{ height: '200px' }}>{story()}</div>],
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: countries,
    onChange: console.log,
    renderItem: (item: Country) => <div>{item.label}</div>,
  } as Parameters<typeof Select>[0],
};

// eslint-disable-next-line react-refresh/only-export-components
export default meta;
