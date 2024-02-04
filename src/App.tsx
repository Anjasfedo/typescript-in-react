import Button from "./components/Button_style.tsx";

function App() {
  return (
    <>
      <Button
        style={{
          backgroundColor: "blue",
          fontSize: 20,
          textColor: "green",
          pillShape: true,
        }}
      />
    </>
  );
}

export default App;
