import  { useState,createContext } from 'react';
import A from './A'

export const MyContext = createContext('barev')

export default function App() {
	const [value, setValue] = useState("basturma")
	return (
		<div>
			<h1>APP COMPONENT</h1>
			<MyContext.Provider value={{
				value,
				x: 5,
				onClick:() => console.log('ok')
			}}>
					<A />

			</MyContext.Provider>
		</div>
	)
}
