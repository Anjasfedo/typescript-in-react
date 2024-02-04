import Button from "./components/Button_function";

function App() {

  const onClick = () => {};

  const onDbClick = (text: string): number => {
    return 5
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <Button onClick={onClick} onDbClick={onDbClick} />
    </main>
  );
}

export default App;
