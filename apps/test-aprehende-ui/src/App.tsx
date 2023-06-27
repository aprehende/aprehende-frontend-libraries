import { Select } from "@aprehende/ui";

interface Country {
  value: string;
  label: string;
}

const countries: Country[] = [
  { value: "MX", label: "Mexico" },
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
];

function App() {
  return (
    <>
      <Select<Country>
        items={countries}
        onChange={console.log}
        renderItem={(item) => <div>{item.label}</div>}
      />
    </>
  );
}

export default App;
