"use server";
import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim().length === 0;
}

function isInvalidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !email || !emailRegex.test(email);
}

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
  revalidatePath("/meals"); // * Trigger cache revalidation for /meals
  redirect("/meals");
}
