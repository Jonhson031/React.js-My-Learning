import { useParams } from 'react-router-dom';

export default function ProductDetailsPage() {
  const params = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product #{params.productId}</p>
    </div>
  );
}
