// const ExampleComponent: React.FC<> = () => {
//   //
// }

type Colors = "red" | "green" | "blue";

type ButtonProps = {
  title: string;
  fontSize: number;
  round?: boolean;
  textColor: Colors;
  padding: number[];
  margin: [number, number, number, number];
};

export default function Button({ title, fontSize, round, margin, padding, textColor }: ButtonProps) {
  return (
    <button
      className="bg-blue-600 text-white rounded-md py-2 px-1"
      type="button"
    >
      {title}
      {fontSize}
      {round}
      {margin}
      {padding}
      {textColor}
    </button>
  );
}
