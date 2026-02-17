// ? Lifting State Up
// Move state to the closest common parent when multiple components need it.

import {useState} from 'react';

function Input() {
  const [text, setText] = useState("");

  return <input onChange={(e) => setText(e.target.value)} />;
}

function Display(){
    return <p>{text}</p> // Display component cannot access this state, because it set inside Input component.
}

// ? When there is two or more components that need to use state, then we lift this state up to common parent component.

// Correct way:
function App() {
  const [text, setText] = useState("");

  return (
    <>
      <Input onChangeText={setText} />
      <Display text={text} />
    </>
  );
}
