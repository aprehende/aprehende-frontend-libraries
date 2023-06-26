import { Input } from "@aprehende/ui";

function App() {
  return (
    <>
      <Input placeholder="Text" widthFull startRender={<span>0/50</span>} />
    </>
  );
}

export default App;
