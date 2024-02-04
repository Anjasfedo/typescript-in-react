// Type can define all data type
// type ButtonProps = {
//   type: "submit" | "reset" | "button";
//   autoFocus?: boolean;
// };

type ButtonProps = React.ComponentPropsWithoutRef<"button">

export default function Button({ ...rest }: ButtonProps) {
  return <button {...rest}>Click</button>;
}
