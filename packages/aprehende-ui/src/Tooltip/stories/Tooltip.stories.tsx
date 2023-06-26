import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from '../Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
        }}
      >
        {story()}
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hover me',
    content: 'Tooltip content',
  },
};

export const Top: Story = {
  args: {
    children: 'Top Tooltip',
    content: 'Top',
    direction: 'top',
  },
};

export const Right: Story = {
  args: {
    children: 'Right Tooltip',
    content: 'Right',
    direction: 'right',
  },
};

export const Bottom: Story = {
  args: {
    children: 'Bottom Tooltip',
    content: 'Bottom',
    direction: 'bottom',
  },
};

export const Left: Story = {
  args: {
    children: 'Left Tooltip',
    content: 'Left',
    direction: 'left',
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export default meta;
