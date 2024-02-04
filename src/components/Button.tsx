// const ExampleComponent: React.FC<> = () => {
//   //
// }

type ButtonProps = {
  title: string;
  fontSize: number;
  round?: boolean;
};

export default function Button({ title, fontSize, round }: ButtonProps) {
  return (
    <button
      className="bg-blue-600 text-white rounded-md py-2 px-1"
      type="button"
    >
      {title}
      {fontSize}
      {round}
    </button>
  );
}
