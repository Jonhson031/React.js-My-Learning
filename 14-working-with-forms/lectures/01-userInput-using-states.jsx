// ? Controlled Components
// * Getting user inputs using state.
// React owns the state of the input. Every keystroke updates state:

// Best to use when you need re-ender after every key stroke
import { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // prevents page refresh
    console.log({ email, password });

    // ? to reset:
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email} // controlled by React state
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
