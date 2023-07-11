import React from 'react';

export default function Products({ data }) {
  return (
    <div className='product-card'>
      {data.map(product => (
        <div key={product.id}>
          <h2>Title: {product.title}</h2>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Discount Percentage: {product.discountPercentage}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
}
