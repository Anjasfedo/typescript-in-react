import { useState } from "react";
import Button from "./components/Button_usestate";

function App() {

  const [count, setCount] = useState(0)  

  return (
    <main className="min-h-screen flex justify-center items-center">
      <Button setCount={setCount} count={count}/>
    </main>
  );
}

export default App;
