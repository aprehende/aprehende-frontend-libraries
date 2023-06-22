import { useState } from "react";
import { Button } from "@aprehende/ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>Count is: {count}</Button>
    </>
  );
}

export default App;
