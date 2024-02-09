


export default function Button() {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log(event);


  return <button onClick={handleClick}>click</button>;
}
