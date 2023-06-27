import { Modal, Button } from "@aprehende/ui";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const close = () => {
    console.log("Holaaa");
    setIsOpen(false);
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Click me!</Button>
      {isOpen && (
        <Modal open={isOpen} onClose={close} backdrop>
          Hola
        </Modal>
      )}
    </>
  );
}

export default App;