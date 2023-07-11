import React from 'react'

export default function Products({data}) {
  return (
    <div className='Product'>
        {
            data.map(product => {
                return(
                    <div key={product.id}>
                        <img src={product.url} alt={product.title} />
                        <hr />
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
