// ? Routing in Next.js
// * Next.js uses a file-based routing system. Each file in the 'pages' directory corresponds to a route in the application.
// * For example, a file named 'about.js' in the 'pages' directory would be accessible at '/about' in the browser.

// * Dynamic routing can be achieved by using square brackets in the file name. For example, a file named '[id].js' would match any route like '/123' or '/abc', 
// * where 'id' is a dynamic parameter that can be accessed in the component.


import Link from "next/link";

export default async function MealPage({ params }) {
    // * The 'params' object contains the dynamic parameters from the route. In this case, we can access the 'mealId' parameter from the URL.
  const { mealId } = await params;

  return (
    <main style={{ color: "white", textAlign: "center" }}>
      <h1>Meal {mealId}</h1>
      <Link href="/meals/share">Share</Link>
    </main>
  );
}

