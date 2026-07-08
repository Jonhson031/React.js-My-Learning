// * "as" type assertion

import { useEffect, useState } from "react";

type buttonColor = "red" | "blue" | "gren";

export default function Button() {
  useEffect(() => {
    const previousButtonColor = localStorage.getItem(
      "buttonColors",
    ) as buttonColor;
  }, []);
}
