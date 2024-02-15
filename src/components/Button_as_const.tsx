import { useEffect } from "react";

const buttonTextOptions = ["Click", "Click Me", "Click Me Again"] as const;

type UserT = {
  name: string;
  session: string;
};

type Guest = Omit<UserT, "name">;

type BtnColorT = "red" | "blue" | "green";

export default function Button() {
  useEffect(() => {
    const pevBtnColor = localStorage.getItem("btnCulor") as BtnColorT;
  });

  return <button>{buttonTextOptions.map((option) => option)}</button>;
}
