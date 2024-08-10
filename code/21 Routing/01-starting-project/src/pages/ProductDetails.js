import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams();

  // params.productId

  return (
    <>
      <h1>
        Product Detail Page
      </h1>
      <p>
        Product ID: {params.productId}
      </p>
    </>
  )
}

export default ProductDetailPage;
