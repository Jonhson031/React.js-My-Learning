// * Working with React Props and TypeScript
// ? Describe what props a component expects, and TypeScript will enforce it.

type Color = "white" | "black" | "red" | "blue"; // union props
type ButtonProps = {
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
    >
      Click me
    </button>
  );
}

// * Children
type CardProps = {
  children: React.ReactNode; // * React.ReactNode means "anything React can render."
};

export function Card({ children }: CardProps) {
  return <div>{children}</div>;
}

export function App() {
  return (
    <>
      <Card>
        <h1>Hello</h1>
      </Card>
      ;
    </>
  );
}

// * Passing Functions
type Product = {
  id: number;
  title: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
  onAddToCart: (id: number) => void;
};

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>

      <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
}
