// * Triggering cache revalidations
// * Cache revalidation in Next.js tells the framework:
// ? "The data has changed. Don't keep serving the old cached version—refresh it."
// This is especially important after a Server Action creates, updates, or deletes data.

// User visits /meals
//         ↓
// Next.js caches the page
//         ↓
// User submits a new meal
//         ↓
// Database is updated
//         ↓
// User goes back to /meals
//         ↓
// ❌ Still sees the old cached page

// ! The cache doesn't know the database changed.

import { revalidatePath } from "next/cache";

export async function shareMeal(formData) {
  "use server";

  await saveMeal(meal);

  revalidatePath("/meals"); // * Trigger cache revalidation after saving new meal
  redirect("/meals");
}
