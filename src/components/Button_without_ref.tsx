
interface Variant {
  variant?: "primary" | "secondary"
}

interface ButtonProps extends Variant {
  restssss: React.ComponentPropsWithoutRef<"button">
}

// type Variant = {
//   variant: "primary" | "secondary";
// };

// type ButtonProps = React.ComponentPropsWithoutRef<"button"> & Variant;

export default function Button({ variant, ...rest }: ButtonProps) {
  return <button {...rest}>{variant}</button>;
}
