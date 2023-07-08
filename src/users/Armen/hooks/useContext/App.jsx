import  { useState,createContext } from 'react';
import Items from './Items'


import './App.scss'

export const MyContext = createContext([])

export default function App() {
	const [data, setData] = useState([
		{
			id:1,
			image: '../../../../../public/images/Rectangle 33.jpg',
			description: 'Завершили строительство и 	организовали продажу муниципального объекта 		недвижимости дороже первоначальной стоимости 		на 22 млн. рублей.'
		},
		{
			id:2,
			image: '../../../../../public/images/Rectangle 34.jpg',
			description: 'Завершили строительство и 	организовали продажу муниципального объекта 		недвижимости дороже первоначальной стоимости 		на 22 млн. рублей.'
		},
		{
			id:3,
			image: '../../../../../public/images/Rectangle 35.jpg',
			description: 'Завершили строительство и 	организовали продажу муниципального объекта 		недвижимости дороже первоначальной стоимости 		на 22 млн. рублей.'
		},
		{
			id:4,
			image: '../../../../../public/images/Rectangle 36.jpg',
			description: 'Завершили строительство и 	организовали продажу муниципального объекта 		недвижимости дороже первоначальной стоимости 		на 22 млн. рублей.'
		},
	])
	
	return (
		<div className='App'>
			<MyContext.Provider value={data}>
				<Items />
			</MyContext.Provider>
			
		</div>
	)
}
