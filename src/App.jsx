import Slider, {slickNext} from "react-slick";
import { useState, useRef } from 'react';
function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<button  onClick={onClick}> {'<'} </button>
	);
}

import './App.css'

export default function App() {

	const [value, setValue] = useState(0);
	const slider = useRef(null)
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableHeight: true,
		arrows:true,
		centerMode:true,
		initialSlide: 2,
		prevArrow: <SampleNextArrow />,
		className: "slider variable-width",
		centerPadding: '0px',
		afterChange: (curentSlide) => {
			setValue(curentSlide)
		}
	
	};
	return (
		<div className="App">
			<h2> Slide is  {value}</h2>
			<button onClick={() => slider?.current.slickNext()}>slickNext</button>
			<Slider {...settings} ref={slider}>
				<div>
					
					 <img src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="" />
			
				</div>
				<div>
					
					<img src="https://images.unsplash.com/photo-1680794060754-a55714ded55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
				</div>
				<div>
					
					 <img src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="" />
				</div>
				<div>
					
					<img src="https://images.unsplash.com/photo-1680794060754-a55714ded55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
				</div>
				<div>
				
					 <img src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="" />
				</div>
				<div>
					
					<img src="https://images.unsplash.com/photo-1680794060754-a55714ded55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
				</div>
			</Slider>
		</div>
	)
}
