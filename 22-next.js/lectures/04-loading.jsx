// * loading.js
// * Reserved file name for loading page.
// * Used when loading data from server that can take some time to load
import styles from "./loading.module.css";

export default function MealsLoadingPage() {
  return <p className={styles.loading}>Fetching meals</p>;
}

// * Alternative to this method is using Suspense react component
// * For example we have page with title and grid of products loaded from server
// * Suspense allows us to load title immediately and show some loading state while waiting for products to load.
async function Products() {
  const products = await getMeals();
  return <ProductsGrid products={products}></ProductsGrid>;
}

export function Page() {
  return (
    <>
      <h1>Our products</h1>
      <Suspense fallback={<p className={styles.loading}>Fetching products</p>}>
        <Products />
      </Suspense>
    </>
  );
}
