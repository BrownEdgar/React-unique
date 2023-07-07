import  { useState,createContext } from 'react';

export const MyContext = createContext('barev')

export default function App() {
	const [data, setData] = useState([
		{
			id:1,
			image: ''
		}
	])
	
	return (
		<div>
			<h1>APP COMPONENT</h1>
			<MyContext.Provider value={{
				arr:value,
				total,
			}}>
				<A />
			</MyContext.Provider>
		</div>
	)
}
