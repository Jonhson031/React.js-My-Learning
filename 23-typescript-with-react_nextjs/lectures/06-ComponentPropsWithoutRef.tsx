// * ComponentPropsWithoutRef
// Imagine you want your component to behave like a normal HTML <button>.
// Instead of writing every prop yourself:
type ButtonPropsExample = {
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  // ...hundreds more
};

import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  title: string;
  color: "primary" | "secondary";
};

function Button({ title, color, ...props }: ButtonProps) {
  return <button {...props} />;
}

export default function App() {
  <Button
    title="Click me"
    color="primary"
    type="submit"
    disabled
    className="btn"
    onClick={() => {}}
  >
    Save
  </Button>;
}
