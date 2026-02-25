import { useState } from "react";
import { styled } from "styled-components";
import Input from "./Input.jsx";

// const ControlDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color: #d1d5db;
//   color: #374151;
//   border: 1px solid transparent;
//   border-radius: 0.25rem;
//   box-shadow:
//     0 1px 3px 0 rgba(0, 0, 0, 0.1),
//     0 1px 2px 0 rgba(0, 0, 0, 0.06);
//   ${({ $invalid }) =>
//     $invalid
//       ? `
//   color: #ef4444;
//   border-color: #f73f3f;
//   background-color: #fed2d2;`
//       : undefined};
// `;

// const Button = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;
//   &:hover {
//     background-color: #f0920e;
//   }
// `;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin(e) {
    setSubmitted(true);
    console.log(e.target.innerText);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 rounded shadow-md bg-gradient-to-b mx-auto from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-2 mb-6">
        <Input label="Email" invalid={emailNotValid}></Input>
        <Input label="Password" invalid={passwordNotValid}></Input>
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="text-amber-400 hover:text-amber-500"
        >
          Create a new account
        </button>
        <button
          className="px-4 py-2 font-semibold uppercase rounded mr-1 text-stone-900 bg-amber-400 hover:bg-amber-500"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
