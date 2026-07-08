import type { ComponentPropsWithoutRef } from "react";
import { type Color } from "../../../lib/types";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  bgColor: Color;
  fSize: string;
  fWeight: number;
  size: "small" | "medium" | "large";
  textColor: Color;
  padding: [string, string, string, string]; // * Tuple - pre defines the length of the array and the type of each element
};

export default function Button({
  bgColor,
  fSize,
  fWeight,
  size,
  textColor,
  padding,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button-${size} button`}
      style={{
        backgroundColor: bgColor,
        fontSize: fSize,
        fontWeight: fWeight,
        color: textColor,
        padding: `${padding[0]} ${padding[1]} ${padding[2]} ${padding[3]}`,
      }}
      {...props}
    >
      Click me
    </button>
  );
}
