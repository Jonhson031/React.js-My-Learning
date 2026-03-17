// ? useMemo (wrapped around normal functions).
// * caches the result of a calculation between renders, recalculating it only when its dependencies change.
import { useMemo } from 'react';

// The Problem it Solves
// Every render runs ALL the code inside your component — including expensive calculations:

function ProductList({ products, filterText }) {
  // This runs on EVERY render — even if products and filterText didn't change
  const filtered = products
    .filter((p) => p.name.includes(filterText))
    .sort((a, b) => a.price - b.price);

  return filtered.map((p) => <ProductCard key={p.id} product={p} />);
}

// * If something unrelated causes a re-render (like a theme toggle), that expensive filter+sort runs needlessly. useMemo fixes that:
function ProductList({ products, filterText }) {
  // Only recalculates when products or filterText changes
  const filtered = useMemo(() => {
    return products.filter((p) => p.name.includes(filterText)).sort((a, b) => a.price - b.price);
  }, [products, filterText]);

  return filtered.map((p) => <ProductCard key={p.id} product={p} />);
}

// ❌ Pointless — this is trivial, memoizing it costs more than it saves
const double = useMemo(() => count * 2, [count]);

// ❌ Pointless — simple string operation
const name = useMemo(() => `${first} ${last}`, [first, last]);

// ✅ Worth it — genuinely expensive
const result = useMemo(() => {
  return hugeDataset
    .filter(...products)
    .map(...products)
    .reduce(...products);
}, [hugeDataset]);
