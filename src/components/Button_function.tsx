
type ButtonProps = {
  onClick: () => void
  onDbClick: (test: string) => number
}

export default function Button({onClick, onDbClick}: ButtonProps) {

  console.log(onDbClick("anjas"));

  return <button onClick={onClick}>Button</button>;
}
