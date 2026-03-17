// ? useImperativeHandle
// useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.

// 👉 It lets a parent component control a child component imperatively (like calling functions on it), instead of just passing props.

import {ref , useImperativeHandle} from 'react';

// It accepts two arguments (ref Object, function)

/* 
1. The primary purpose of using useImperativeHandle is not necessarily to create abstraction, 
but to expose specific methods or properties of a child component to its parent component. 
This can be useful when you want to provide a more controlled 
or specific API for interacting with the child component from its parent. 
It's about controlling what parts of the child component are accessible to the parent. */



// ✅ Example (Modal control)
// Child component:
import { useRef, useImperativeHandle } from "react";

export default function Modal({ ref }) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
    close() {
      dialogRef.current.close();
    }
  }));

  return (
    <dialog ref={dialogRef}>
      <p>Hello from modal</p>
    </dialog>
  );
}

// Parent component
import { useRef } from "react";
import Modal from "./Modal";

export default function App() {
  const modalRef = useRef();

  return (
    <>
      <button onClick={() => modalRef.current.open()}>
        Open Modal
      </button>

      <Modal ref={modalRef} />
    </>
  );
}