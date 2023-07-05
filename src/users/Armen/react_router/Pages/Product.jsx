import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ROUTES from '../routes/routes';
import axios from 'axios';
import './Product.scss';

export default function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = Number(id);

  useEffect(() => {
    if (productId && productId <= 100) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(error => console.error(error));
    }
  }, [id]);

  if (!productId || productId > 100) {
    return <h1>Invalid product ID or product not found</h1>;
  }

  const goBack = () => {
    navigate(`/${ROUTES.PRODUCTS}`);
  };

  return (
    <div>
      <h1>Welcome to product page N {id}</h1>
      <div className="product-wrapper">
        <div className="product-carousel">
          {product.images && (
            <Carousel>
              {product.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Product Image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          )}
        </div>
        <div className="product-details">
          <div className="product-card">
            <button onClick={goBack}>All products</button>
            <h2>Title: {product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Discount Percentage: {product.discountPercentage}</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
