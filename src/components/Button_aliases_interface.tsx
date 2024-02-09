
// Interface only define object on it
interface IButtonProps {
  text: string;
  count: number;
}
// Type can define all data type
// type TButtonProps = {
//   text: string;
//   count: number;
// };

export default function Button() {
  return <button></button>;
}
