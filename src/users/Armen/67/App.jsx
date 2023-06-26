import { useState } from 'react';

import data from './data.json'

import './App.scss';
import MyLoader from './Loader/MyLoader';

export default function App() {
	const [cakes] = useState(data);

	const [selectedCategory, setSelectedCategory] = useState("");

	const [isLoading, setIsLoading] = useState(false)

	const handleChange = (e) => {
		const { value } = e.target;
		setIsLoading(true);
		setTimeout(() => {
			setSelectedCategory(value);
			setIsLoading(false);
		}, 1200)

	}

	const renderData = () => {
		return cakes
			.filter((cake) =>
				selectedCategory ? cake.category === selectedCategory : true
			)
			.map((cake) => (
				<div className="App__cake" key={cake.id}>
					<div className="App__imageBox">
						<img src={cake.images} alt="" />
					</div>
					<div className="App__content">
						<h2>{cake.name}</h2>
						<p>{cake.resept}</p>
						<p>{cake.description}</p>
					</div>
				</div>
			))
	}

	return (
		<div className="App">
			<div className="App__flex">
				<form>
					<div className="App__category">
						<label htmlFor="category">Category:</label>
						<select
							name="category"
							id="category"
							onChange={handleChange}
							value={selectedCategory}
						>
							<option value="">All</option>
							{Array.from(new Set(cakes.map((cake) => cake.category))).map(
								(category) => (
									<option key={category} value={category}>
										{category}
									</option>
								)
							)}
						</select>
					</div>
				</form>
				<div className="App__lists">
					{isLoading 
					? (
						<>
								{new Array(3).fill().map((_, index) => <MyLoader key={index} backgroundColor="#1d8642" foregroundColor="#dd2c2c" />)}
						</>
						) : renderData() }
					
				
				</div>
			</div>
		</div>
	);
}
