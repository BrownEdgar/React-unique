import Slider from "react-slick";
import { useState } from 'react';

import "./App.css"

export default function App() {
	const [data, setdata] = useState(
		{
			1: 'https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
			2: 'https://plus.unsplash.com/premium_photo-1669559809539-acc3b2e05f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
			3:'https://images.unsplash.com/photo-1689176748178-b7989e722873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
			4:'https://images.unsplash.com/photo-1689126494042-39f69fa4c8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
		}
	)
	
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autospeed: 2000,
  }
  return (
    <div className="App">
      <Slider {...settings}>
				{
					Object.values(data).map((elem, index) => {
						return (
							<div key={index}>
								<img src={elem} alt={`pht-${index}`} />
							</div>
						)
					})
				}
      </Slider>
    </div>
  )
}
