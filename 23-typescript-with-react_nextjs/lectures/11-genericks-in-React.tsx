import { ReactNode } from "react";

type CountProps<T extends string | number> = {
  count: T;
  countHistory: T[];
};

export default function Count<T extends string | number>({
  count,
  countHistory,
}: CountProps<T>) {
  return (
    <div>
      <p>{count}</p>
      <ul>
        {countHistory.map((count) => (
          <li>{count}</li>
        ))}
      </ul>
    </div>
  );
}

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export function App() {
  return (
    <div>
      <Count count={1} countHistory={[1, 2, 3]}></Count>
      <List
        items={[{ name: "product1" }]}
        renderItem={(product) => product.name}
      />
    </div>
  );
}
