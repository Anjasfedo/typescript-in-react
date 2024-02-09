type ButtonProps = {
  children: JSX.Element
};

export default function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
