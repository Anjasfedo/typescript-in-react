type ButtonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number
};

export default function Button({ setCount, count }: ButtonProps, {number = 0}) {

  const increment = () => {
    setCount(count += 1)
  }
  
  return <button onClick={increment}>{count}{number}</button>;
}
