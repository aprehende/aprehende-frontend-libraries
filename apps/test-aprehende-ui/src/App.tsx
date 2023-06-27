import { Steps } from "@aprehende/ui";

function App() {
  return (
    <>
      <Steps
        current={2}
        items={[{ title: "Step 1" }, { title: "Step 2" }, { title: "Step 3" }]}
      />
    </>
  );
}

export default App;
