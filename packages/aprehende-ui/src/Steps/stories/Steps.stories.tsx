import type { Meta, StoryObj } from '@storybook/react';

import Steps from '../Steps';

const meta = {
  title: 'Components/Steps',
  component: Steps,
  tags: ['autodocs'],
} satisfies Meta<typeof Steps>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    current: 2,
    items: [{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }],
  } as Parameters<typeof Steps>[0],
};

// eslint-disable-next-line react-refresh/only-export-components
export default meta;
