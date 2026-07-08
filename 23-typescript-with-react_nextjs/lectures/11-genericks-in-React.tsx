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

export function App() {
  return (
    <div>
      <Count count={1} countHistory={[1, 2, 3]}></Count>
    </div>
  );
}
