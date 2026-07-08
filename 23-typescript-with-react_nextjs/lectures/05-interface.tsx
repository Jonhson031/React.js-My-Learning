// * Interfaces in TypeScript
// ? Any object that claims to be this interface must have these properties.
/* Prefer to use interfaces for:
- Object models
- Class contracts
- Component props
- API responses */

interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber?: number; // * optional property
}

const user1: User = {
  id: 1,
  name: "Max",
  email: "max@example.com",
  phoneNumber: 6308223525,
};

const user2: User = {
  id: 2,
  name: "John",
  email: "john@example.com",
};

interface Character {
  name: string;
  level: number;
}

// * Extending interfaces we use 'extends' keyword:
interface Wizard extends Character {
  spellbook: string[];
  mana: number;
}

// * Interface vs Types
// Use interface when describing the shape of an object, especially if it may be extended.
// Use type for unions, tuples, primitive aliases, utility types (Omit, Pick, Partial) and more advanced type compositions.
