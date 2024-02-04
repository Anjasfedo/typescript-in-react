import Button from "./components/Button_record";

function App() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Button borderRadius={{
        "topLeft": 5,
        "topRight": 5,
        "bottomLeft": 10,
        "bottomRight": 10
      }} />
    </main>
  );
}

export default App;
