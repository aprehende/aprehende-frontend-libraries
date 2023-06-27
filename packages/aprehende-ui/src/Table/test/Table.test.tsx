import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Table from '../Table';

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

describe('Table', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Table<User>
        data={users}
        columns={[
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
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the data', () => {
    const { getByText } = render(
      <Table<User>
        data={users}
        columns={[
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
        ]}
      />
    );
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  it('should render sticky table', () => {
    const { getByTestId } = render(
      <Table<User>
        isSticky
        data={users}
        columns={[
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
        ]}
      />
    );
    const tableHeader = getByTestId('thead');
    expect(tableHeader).toHaveStyle('position: sticky');
  });

  it('should render table with actions', () => {
    render(
      <Table<User>
        data={users}
        columns={[
          {
            title: 'Name',
            key: 'name',
            render: (name: string) => <strong>{name}</strong>,
          },
          {
            title: 'Email',
            key: 'email',
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
          {
            title: 'Actions',
            key: 'id',
            isActions: true,
            render: () => (
              <span>
                <button>edit</button>
              </span>
            ),
          },
        ]}
      />
    );
  });
});
