import {useState} from 'react';

// ? Updating Object State Immutably
// In React, you never change objects directly inside state.

// ❌ Wrong way (mutating state)
const [user, setUser] = useState({
  name: "Max",
  age: 25
});

// ✅ Correct way (immutable update)
setUser({
  ...user,
  name: "John"
});

