import type { Meta, StoryObj } from '@storybook/react';

import Input from '../Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const WithStartRender: Story = {
  args: {
    placeholder: 'Placeholder',
    startRender: <span>0/50</span>,
  },
};

export const WithEndRender: Story = {
  args: {
    placeholder: 'Placeholder',
    endRender: <span>0/50</span>,
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export default meta;
