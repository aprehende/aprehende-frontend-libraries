import { useState } from "react";
import { Button } from "@aprehende/ui";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <Button onClick={increment}>Count is: {count}</Button>
    </>
  );
}

export default App;
