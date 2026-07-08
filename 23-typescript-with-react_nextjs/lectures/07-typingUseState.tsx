// * Typing useState hook
import { useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function App() {
  // * We don't have to provide type to primitives, TypeScript inferences them on it's own
  const [count, setCount] = useState(0); // infers number
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // * But, we have to set type to objects or arrays, that has initial type of null or undefined
  const [userNull, setUserNull] = useState(null); // always gonna be null

  // * Array:
  const [users, setUsers] = useState<User[]>([]); // initial type is empty array, but can be changed to the User type

  // * Object that starts empty
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Max",
  });

  // * Union Types
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  return (
    <div>
      <h1>TITLE</h1>
      <p>{count}</p>
    </div>
  );
}

type Product = {
  id: number;
  title: string;
  price: number;
};

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      {products.map((product) => (
        <button key={product.id} onClick={() => setSelected(product)}>
          {product.title}
        </button>
      ))}
    </>
  );
}
