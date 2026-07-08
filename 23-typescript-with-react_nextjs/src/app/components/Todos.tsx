type itemsProps = {
  items: string[];
};

export default function Todos({ items }: itemsProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
