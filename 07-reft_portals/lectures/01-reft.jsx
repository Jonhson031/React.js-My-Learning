// ? Refs (useRef)
// In React, Refs let's you access DOM elements directly

// Normally React = declarative
// Refs = “escape hatch” when needed

import { useRef } from "react";

function App() {
  const inputRef = useRef();

  // ? You always should target the current property of the ref
  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      {/* to set ref property:  */}
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </>
  );
}

/* 🔹 When to use refs
 - Use refs when you need:
 - focus input
 - scroll to element
 - read value without state
 - integrate with non-React libraries */

// ? State vs Refs
/* 🔹 State
- causes re-render when updated
- should be used for values that are directly reflected in the UI
- Should not be used for behind the scenes values that do not affect rendering
🔹 Refs
- do NOT cause re-renders
- used for DOM access and non-React libraries integration 

👉 State = data
👉 Ref = control
*/

export default App;
