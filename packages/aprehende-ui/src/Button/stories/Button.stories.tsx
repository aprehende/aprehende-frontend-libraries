import type { Meta, StoryObj } from '@storybook/react';

import Button from '../Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click here',
    onClick: () => {
      //nothing
    },
  },
};

export const StartRender: Story = {
  args: {
    children: 'Increment',
    startRender: <>+</>,
    onClick: () => {
      //nothing
    },
  },
};

export const EndRender: Story = {
  args: {
    children: 'Decrement',
    endRender: <>-</>,
    onClick: () => {
      //nothing
    },
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export default meta;
