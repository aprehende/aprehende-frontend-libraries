import type { Meta, StoryObj } from '@storybook/react';

import Chip from '../Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Test',
    onDelete: undefined,
  },
};

export const Deleteable: Story = {
  args: {
    children: 'Test',
    onDelete: () => {
      //nothing
    },
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export default meta;
