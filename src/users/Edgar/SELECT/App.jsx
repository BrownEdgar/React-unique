import { useState } from 'react';

import './App.scss'

export default function App() {
	const [cakes, setCakes] = useState([
		{
			id: 1,
			name: "Микадо",
			imges: 'https://images.squarespace-cdn.com/content/v1/54412118e4b03de3b6796773/1539267515387-UZRD1PI26ZP0WVKOL5Z0/tort-mikado.jpg?format=2500w',
			resept: "Крем для торта: 400 мл молока, 200 г сливочного масла, 150 г сахара, 2 яйца, 4 ст. л. какао-порошка, 2 ст. л. муки, 400 г вареного сгущенного молока.",
			description: "Торт «Микадо» представляет собой сборку из множества тончайших сметанных коржей в сочетании с заварным шоколадным кремом и вареной сгущенкой. "
		},
		{
			id: 2,
			name: "Эскимо",
			imges: 'https://cdn.lifehacker.ru/wp-content/uploads/2021/11/Depositphotos_68838977_XL_1637256577-scaled-e1637256646604-1280x640.jpg',
			resept: "Крем для торта: 400 мл молока, 200 г сливочного масла, 150 г сахара, 2 яйца, 4 ст. л. какао-порошка, 2 ст. л. муки, 400 г вареного сгущенного молока.",
			description: "Насыщенные и хорошо пропитанные коржи, прослойка из воздушного сливочного крема и тонкий слой глазури — этот восхитительный торт вам захочется готовить на каждый праздник."
		},
		{
			id: 3,
			name: "Наполеон",
			imges: 'https://hips.hearstapps.com/hmg-prod/images/220713-delish-seo-01-napoleon-cake-horizontal-v5-081-eb-1658416382.jpg?crop=0.981xw:0.967xh;0.0187xw,0.0326xh&resize=1200:*',
			resept: "Крем для торта: 400 мл молока, 200 г сливочного масла, 150 г сахара, 2 яйца, 4 ст. л. какао-порошка, 2 ст. л. муки, 400 г вареного сгущенного молока.",
			description: "Торт «Микадо» представляет собой сборку из множества тончайших сметанных коржей в сочетании с заварным шоколадным кремом и вареной сгущенкой. "
		},
		{
			id: 4,
			name: "Торт",
			imges: 'https://tart-tort.ru/uploads/product/100/107/123-3_2021-08-25_15-48-41.JPG',
			resept: "Крем для торта: 400 мл молока, 200 г сливочного масла, 150 г сахара, 2 яйца, 4 ст. л. какао-порошка, 2 ст. л. муки, 400 г вареного сгущенного молока.",
			description: "Торт «Микадо» представляет собой сборку из множества тончайших сметанных коржей в сочетании с заварным шоколадным кремом и вареной сгущенкой. "
		},
	])

	const [currenCakeId, setCurrenCakeId] = useState(0)

	const handleChange = (e) => {  
		const {value} = e.target;
		setCurrenCakeId(Number(value))
	}


	return (
		<div className='App'>
			<div className='App__flex'>
				<form>
					<select name="cakes" id="cakes" onChange={handleChange}>
						{
							cakes
								.map(cake => cake.name)
								.map((elem, index) => {
									return (
										<option key={index} value={index}>{elem}</option>
									)
								})
						}

					</select>
				</form>
				<div className='App__lists'>
					<div className='App__imageBox'>
						<img src={cakes[currenCakeId].imges} alt="" />
					</div>
					<div className='App__content'>
						<h2>{cakes[currenCakeId].name}</h2>
						<p>
							{cakes[currenCakeId].resept}
						</p>
						<p>
							{cakes[currenCakeId].description}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
