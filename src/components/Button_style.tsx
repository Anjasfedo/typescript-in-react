// const ExampleComponent: React.FC<> = () => {
//   //
// }

type Colors = "red" | "green" | "blue";

type ButtonProps = {
  style: {
    backgroundColor: Colors;
    fontSize: number;
    pillShape?: boolean;
    textColor: Colors;
  };
};

export default function Button({style}: ButtonProps) {
  return (
    <button style={style}>
      Button
    </button>
  );
}
