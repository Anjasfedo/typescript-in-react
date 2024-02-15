import { useEffect } from "react";

export default function Button() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data: unknown) => {
        data.name.toUpperCase()
      });
  }, []);

  return <button>Click Me</button>;
}
