
import { useState } from "react";
import Button from "./components/Button_usestate";

function App() { 
  const [count, setcount] = useState(0)

  return (
    <main className="min-h-screen flex justify-center items-center">
      <Button count={count} setCount={setcount} />
    </main>
  );
}

export default App;
