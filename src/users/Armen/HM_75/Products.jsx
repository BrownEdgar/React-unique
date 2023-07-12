import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function Products({ data }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='product-card'>
      {data.map(product => (
        <div className='product' key={product.id}>
          <h2> {product.title}</h2>
          <Slider {...sliderSettings}>
            {product.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={product.title} />
              </div>
            ))}
          </Slider>
          <p><strong> Description:</strong> {product.description}</p>
          <p><strong> Price:</strong> {product.price}</p>
          <p><strong>Discount Percentage:</strong> {product.discountPercentage}</p>
          <p><strong>Rating:</strong> {product.rating}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
        </div>
      ))}
    </div>
  );
}

