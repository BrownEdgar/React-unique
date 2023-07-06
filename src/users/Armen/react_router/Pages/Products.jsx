import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='grid'>
      {products.map(product => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <div>
            <h2>{product.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;
