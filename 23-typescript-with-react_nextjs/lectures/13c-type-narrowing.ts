// * Type Narrowing using null and undefined
// ? It's important to check for null and undefined values before using them, as they can cause runtime errors if not handled properly.
import { useState } from "react";
const [user, setUser] = useState<User | null>(null); // getUser() returns a User object or null

if (user) {
  console.log(user.name);
}

// * null vs undefined
// ? null - There is intentionally no value
// ? undefined - No value has been assigned.
