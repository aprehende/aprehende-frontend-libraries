import { useState } from "react";
import { Button, Avatar } from "@aprehende/ui";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <Avatar name="Jordan Ruben" />
      <Avatar
        name="Jordan Ruben"
        picture="https://cdn4.buysellads.net/uu/1/134955/1685040267-designdotdev5.jpg"
      />

      <Button onClick={increment}>Count is: {count}</Button>
    </>
  );
}

export default App;
