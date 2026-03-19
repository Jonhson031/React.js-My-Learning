// ? Uncontrolled Components
// * (using useRef)
// Let the DOM handle the input, and read values only on submit:

import { useRef } from 'react';

function SignupForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    // to reset:
    // ! Although this is not recommended
    emailRef.current.value = '';
    passwordRef.current.value = '';

    // ? Better way to reset:
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} />
      <input type="password" ref={passwordRef} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
