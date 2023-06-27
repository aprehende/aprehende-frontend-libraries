import type { Meta, StoryObj } from '@storybook/react';

import Table from '../Table';

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof meta>;

interface User {
  id: number;
  name: string;
  email: string;
  properties: {
    city: string;
    country: string;
  };
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
    properties: {
      city: 'New York',
      country: 'USA',
    },
  },
];

export const Default: Story = {
  args: {
    data: users,
    columns: [
      {
        title: 'Name',
        key: 'name',
        render: (name: string) => <strong>{name}</strong>,
      },
      {
        title: 'Email',
        key: 'email',
        render: (email: string) => <a href={`mailto:${email}`}>{email}</a>,
      },
      {
        title: 'City',
        key: 'properties',
        render: (properties: User['properties']) => properties.city,
      },
      {
        title: 'Country',
        key: 'properties',
        render: (properties: User['properties']) => properties.country,
      },
    ],
  } as Parameters<typeof Table>[0],
};

// eslint-disable-next-line react-refresh/only-export-components
export default meta;
