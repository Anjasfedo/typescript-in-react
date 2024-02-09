
type ButtonProps = {
  borderRadius: Record<string, number>
}

export default function Button({borderRadius}: ButtonProps) {

  console.log(borderRadius);
  return (
    <button >
      Button
    </button>
  );
}
