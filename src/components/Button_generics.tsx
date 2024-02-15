// const convertToArray = <T,>(val: T): T[] => {
//   return [val]
// }

function convertToArray<T>(val: T): T[] {
  return [val];
}

convertToArray(5);
convertToArray(true);
convertToArray("anjas");

type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};

export default function Button<T>({
  countValue,
  countHistory,
}: ButtonProps<T>) {
  console.log(countHistory, countValue);
  return <button>Click Me</button>;
}
