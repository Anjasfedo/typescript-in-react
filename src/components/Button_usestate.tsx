import { useState, useRef } from "react";

type ButtonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
};

type UserT = {
  name: string;
  age: number;
};

export default function Button(
  { setCount, count }: ButtonProps,
  { number = 0 }
) {
  const increment = () => {
    setCount((count += 1));
  };

  // const [text, setText] = useState("Anjas");
  // const [isLog, setIsLog] = useState(true);

  // const [user, setUser] = useState<UserT | null>(null);

  // const name = user?.name;
  // console.log(text, isLog, user, name);

  const ref = useRef<HTMLButtonElement>(null)

  return (
    <button onClick={increment} ref={ref}>
      {count}
      {number}
    </button>
  );
}
