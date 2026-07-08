// * Omit type
// ? Used when you reuse existing type but want to remove some property from it

type UserSession = {
  sessionId: number;
  name: string;
};

type Guest = Omit<UserSession, "name">;
