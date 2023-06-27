import { Table } from "@aprehende/ui";

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
    name: "John Doe",
    email: "johndoe@mail.com",
    properties: {
      city: "New York",
      country: "USA",
    },
  },
];

function App() {
  return (
    <div>
      <Table<User>
        data={users}
        columns={[
          {
            title: "Name",
            key: "name",
            render: (name: string) => <strong>{name}</strong>,
          },
          {
            title: "Email",
            key: "email",
            render: (email: string) => <a href={`mailto:${email}`}>{email}</a>,
          },
          {
            title: "City",
            key: "properties",
            render: (properties: User["properties"]) => properties.city,
          },
          {
            title: "Country",
            key: "properties",
            render: (properties: User["properties"]) => properties.country,
          },
        ]}
      />
    </div>
  );
}

export default App;
