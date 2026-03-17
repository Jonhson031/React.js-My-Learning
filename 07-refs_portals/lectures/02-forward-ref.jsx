// ? Forward ref
// forwardRef is a React feature that lets a parent component pass a ref through a component to a child DOM element (or another component).

// Normally, refs don’t work on custom components—only on DOM elements like <input> or <div>. forwardRef fixes that.
import { useRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} placeholder="Type here..." />;
});

export default function App() {
  const inputRef = useRef();

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </>
  );
}

// ! In React 19, forwardRef is deprecated for function components because ref is now a standard prop that can be passed directly. 
// This change simplifies code and improves the developer experience by removing the need for a special wrapper function in most cases.
