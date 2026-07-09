// * "as" type assertion
// ? Used when you want to tell TypeScript that a value is of a specific type, even if TypeScript cannot infer it on its own.

import { useEffect, useState } from "react";

type buttonColor = "red" | "blue" | "green";

export default function Button() {
  useEffect(() => {
    const previousButtonColor = localStorage.getItem(
      "buttonColors",
    ) as buttonColor;
  }, []);
}
