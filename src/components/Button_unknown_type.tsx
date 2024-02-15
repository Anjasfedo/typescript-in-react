import React, { useEffect } from "react";

type ButtonProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
};

export default function Button() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data: unknown) => console.log(data));
  }, []);

  return <button>Click Me</button>;
}
