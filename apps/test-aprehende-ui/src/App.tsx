import { Chip } from "@aprehende/ui";

function App() {
  return (
    <>
      <Chip>Chip</Chip> <Chip onDelete={() => alert("deleted")}>Chip</Chip>
    </>
  );
}

export default App;
