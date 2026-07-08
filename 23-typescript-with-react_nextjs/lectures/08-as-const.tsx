// * as const
const strings = ["Lorem", "Some text", "Lorem ipsum dolor"] as const;
// Makes properties readonly.
// Prevents arrays from becoming mutable arrays.
// Preserves literal values instead of widening them.

export default function App() {
  return (
    <div>
      {strings.map((string) => (
        <p>{string}</p>
      ))}
    </div>
  );
}

const sizes = ["sm", "md", "lg"] as const;

type Size = (typeof sizes)[number];

type ButtonProps = {
  size: Size;
};
