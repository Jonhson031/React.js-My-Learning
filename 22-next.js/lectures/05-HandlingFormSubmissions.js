// * Introducing & Using Server Actions for Handling Form Submissions
// ? With Server Actions the form can call a server function directly.
// No API route required

// * STEP 1: Create a Server Action
"use server";

// * STEP 2. Handle Errors
// ? Server Actions can return an object with an error property to indicate an error occurred
// ? The form will then receive this object as the return value of the action function

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.creator) ||
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.image ||
    isInvalidText(meal.creator_email) ||
    isInvalidEmail(meal.creator_email)
  ) {
    return { error: "Invalid input data." };
  }

  await saveMeal(meal);
  redirect("/meals");
}

// * STEP 2. Connect it to the Form
import { shareMeal } from "./actions";
import { useActionState } from "react";

export default function Page() {
  const [state, formAction] = useActionState(shareMeal, { error: null });

  return (
    <form action={formAction}>
      <input name="title" />
      <button>Create</button>
    </form>
  );
}
