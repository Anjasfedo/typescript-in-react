import { type Color } from "./lib/types";

export default function Button() {
  const color: Color = "green"

  console.log(color);

  return <button>Click Me</button>;
}
