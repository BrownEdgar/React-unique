import React from 'react'

export default function Products({ data }) {
  return (
    <div className='Products'>
      {
        data.map(product => {
          return (
            <div key={product.id} className='card'>
              <h2 className='title'>{product.title}</h2>
              <p className='brand'>{product.brand}</p>
              <img src={product.images[0]} alt={product.title} />
              <p className='description'>{product.description}</p>
              <div className='cardPrice'>
                <p className='rating'>Rating: {product.rating}</p>
                <p className='price'>{product.price} $</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
