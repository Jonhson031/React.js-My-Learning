// * Utility Types in TypeScript
// ? Let you create new types from existing ones instead of rewriting them.
type Client = {
  name: string;
  age: number;
  email: string;
  number?: number;
  country?: string;
};

// * 1. Partial<T> - makes every property optional.
type UpdateClient = Partial<Client>;

function updateClient(data: Partial<Client>) {
  // User can update just one field
}

// * 2. Required<T> - opposite of Partial. Makes every field required
type CompleteClient = Required<Client>;

// * 3. Readonly<T> - makes every property read only.
// Useful for preventing accidental mutations.
type ReadonlyClient = Readonly<Client>;

const client: ReadonlyClient = {
  name: "Maks",
  age: 20,
  email: "test@email.com",
  country: "USA",
};
// client.age = 25; // ❌ error

// * 4. Pick<T, Keys> - select only properties you want
type ClientCardProps = Pick<Client, "name" | "age">;

// * 5. ReturnType<T> - gets the return type of a function
// TypeScript figures out type automatically.
const store = {
  getState() {},
};
export type RootState = ReturnType<typeof store.getState>;

// * 6. Record<Keys, Type> - creates an object type with specified keys and values
type ThemeColors = Record<string, string>;

const themeColors: ThemeColors = {
  primary: "#fff",
  secondrary: "#000",
  // hover: 000 // ❌ error
};

// * 7. Exclude<T, U> - remove types from a union
type Status = "success" | "loading" | "error";
type WithoutLoading = Exclude<Status, "loading">;

// * 8. Extract<T, U> - extract types from a union
type OnlyLoading = Extract<Status, "loading">; // 'loading
