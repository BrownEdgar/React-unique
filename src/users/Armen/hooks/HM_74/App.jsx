import  { useState,createContext } from 'react';
import Blogs from './Blogs'


import './App.scss'

export const MyContext = createContext([])

export default function App() {
	const [data, setData] = useState([
		{
			id:1,
			title: 'UI Interactions of the week',
            date: '12 Feb 2019',
            links: 'Express, Handlebars',
			description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
		},
		{
			id:2,
			title: 'UI Interactions of the week',
            date: '12 Feb 2019',
            links: 'Express, Handlebars',
			description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
		},
		{
			id:3,
			title: 'UI Interactions of the week',
            date: '12 Feb 2019',
            links: 'Express, Handlebars',
			description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
		},
		{
			id:4,
			title: 'UI Interactions of the week',
            date: '12 Feb 2019',
            links: 'Express, Handlebars',
			description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
		},
		
	])
	
	return (
		<div className='App'>
            <div className='title'>
            <h1>Blog</h1>
            </div>
            
			<MyContext.Provider value={data}>
				<Blogs />
			</MyContext.Provider>
			
		</div>
	)
}
