export default function Input({
  inputValue = "",
  labelValue,
  ...props
}) {
  return (
    <div>
      <label htmlFor={props.id}>{labelValue}</label>
      <input
        type="number"
        {...props}
        value={inputValue}
      />
    </div>
  );
}
