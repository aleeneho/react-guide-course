import { useParams, Link } from 'react-router-dom';

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
      <p><Link to='..' relative='path'>Back</Link></p>
    </>
  )
}

export default ProductDetailPage;
