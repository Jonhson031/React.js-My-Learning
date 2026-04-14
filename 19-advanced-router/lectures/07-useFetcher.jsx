// ? useFetcher()
// lets you: Run a loader or action WITHOUT changing the page (no navigation)

// useSubmit() → submits AND navigates
// useFetcher() → submits in background (stays on same page)

import { useFetcher } from 'react-router-dom';

/*//? Real use cases:
🛒 Add to cart (stay on product page)
❤️ Like / favorite
❌ Delete item from list
🔄 Update quantity
💬 Send message */

export default function AddToCart() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="/cart">
      <input type="hidden" name="productId" value="123" />
      <button>Add to Cart</button>
    </fetcher.Form>
  );
}

// * Router:
const router = {
  path: 'cart',
  action: async ({ request }) => {
    const data = await request.formData();

    const productId = data.get('productId');

    // save to DB / state / localStorage
    console.log('Added:', productId);

    return { success: true };
  },
};
