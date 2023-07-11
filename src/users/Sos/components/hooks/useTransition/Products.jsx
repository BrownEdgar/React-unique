import React from 'react'

export default function Products({data}) {
  return (
    <div className='Product'>
        {
            data.map(product => {
                return(
                    <div key={product.id}>
                        <h2>TITLE: {product.title}</h2>
                        <p>DESCRIPTION: {product.description}</p>
                        <p>PRICE: {product.price}</p>
                        <p>DISCOUNT PERCENTAGE: {product.discountPercentage}</p>
                        <p>RATING: {product.rating}</p>
                        <p>STOCK: {product.stock}</p>
                        <p>BRAND: {product.brand}</p>
                        <p>CATEGORY: {product.category}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
