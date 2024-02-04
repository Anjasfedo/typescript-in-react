// const ExampleComponent: React.FC<> = () => {
//   //
// }

type ButtonProps = {
  style: React.CSSProperties
};

export default function Button({style}: ButtonProps) {
  return (
    <button style={style}>
      Button
    </button>
  );
}
