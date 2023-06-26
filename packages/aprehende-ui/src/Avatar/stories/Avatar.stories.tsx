import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '../Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'John Doe',
  },
};

export const WithPicture: Story = {
  args: {
    name: 'John Doe',
    picture:
      'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export default meta;
