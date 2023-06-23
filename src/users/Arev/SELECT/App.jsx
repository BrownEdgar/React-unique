import { useState } from 'react';

import './App.scss'

export default function App() {
	const [flower, setflower] = useState([
    
		{
			id: 1,
			name: "Jacaranda mimosifolia",
            description: "Jacaranda mimosifolia is a deciduous tree up to 20 m in height with spreading branches making a light crown. Bark pale brown and furrowed, transverse cracks dividing the ridges between the furrows into long, narrow scales. The bole almost always short and malformed, and up to 40- 50 cm in diameter.",
			imges: 'https://images.farmfoodfamily.com/wp-content/uploads/2020/07/1-Jacaranda-mimosifolia.jpg',
		},
		{
			id: 2,
			name: "Crape Myrtle",
            description: "The common crapemyrtle is a deciduous, small to medium sized shrub or small tree with a variable, moderately dense habit, often multi-stemmed form. The showy pink flowers have wrinkled petals like crepe paper. The foliage is dark green changing in fall to yellows, oranges, and reds.",
            imges:"https://images.farmfoodfamily.com/wp-content/uploads/2020/07/2-purple-crape-myrtle.jpg"
		},
		{
			id: 3,
			name: "Bells Of Ireland",
            description:"Bells of Ireland or shellflower, Molucella laevis, is a half-hardy annual that produces unusual pale green to emerald green, funnel-shaped “bells” along green stems in summer.",
			imges: 'https://trulyexperiences.com/blog/wp-content/uploads/2021/01/Bells-of-Ireland-768x401.jpeg',
		},
		{
			id: 4,
			name: "Gladiolus",
            description:"The flowers of unmodified wild species vary from very small to perhaps 40 mm across, and inflorescences bearing anything from one to several flowers. The spectacular giant flower spikes in commerce are the products of centuries of hybridisation and selection.",
			imges: 'https://trulyexperiences.com/blog/wp-content/uploads/2021/01/Green-Gladiolus-768x514.jpeg',
		},
		{
			id: 5,
			name: "Begonia",
            description:"It is a compact, bushy, mounded, fibrous-rooted plant that features fleshy stems, waxy dark green to bronze leaves and loose clusters (cymes) of single or double flowers in shades of white, pink or red plus bicolor versions thereof. Flowers reliably bloom throughout the growing season (May to October)",
			imges: 'https://trulyexperiences.com/blog/wp-content/uploads/2021/02/red-begonia-420x273.jpeg',
		},
		{
			id: 6,
			name: "Poinsettia",
            description:"In warm climates the poinsettia grows outdoors as a winter-flowering leggy shrub about 3 metres (10 feet) high; as a potted plant in northern areas it rarely grows beyond 1 metre. What appear to be petals are actually coloured leaflike bracts that surround a central cluster of tiny yellow flowers",
			imges: 'https://trulyexperiences.com/blog/wp-content/uploads/2021/02/Poinsettia-420x280.jpg',
		},

	])

	const [currenPurpleId, setCurrenPurpleId] = useState(0)

	const handleChange = (e) => {  
		const {value} = e.target;
		setCurrenPurpleId(Number(value))
	}


	return (
		<div className='App'>
			<div className='App__flex'>
				<form>
					<select name="flowers" id="flowers" onChange={handleChange}>
						{
							flower
								.map(flower => flower.name)
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
						<img src={flower[currenPurpleId].imges} alt="" />
					</div>
					<div className='App__content'>
						<h2>{flower[currenPurpleId].name}</h2>
                        <p>{flower[currenPurpleId].description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
