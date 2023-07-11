<<<<<<< HEAD
import  { useState,createContext } from 'react';
=======
import { useState, createContext } from 'react';
>>>>>>> f2a32ed1bc4bbd307279aadf20087da0a6bdc28f
import Blogs from './Blogs'


import './App.scss'

export const MyContext = createContext([])

export default function App() {
	const currentDate = new Date().toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
<<<<<<< HEAD
	  }); 
	  
	const [data, setData] = useState([
		{
			id:1,
			title: 'UI Interactions of the week',
            date: currentDate,
            link1: 'Express',
            link2: 'Handlebars',
			description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
		},
		{
			id:2,
			title: 'UI Interactions of the week',
            date: currentDate,
            link1: 'Express',
            link2: 'Handlebars',
			description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
		},
		{
			id:3,
			title: 'UI Interactions of the week',
            date: '12 Feb 2019',
            link1: 'Express',
            link2: 'Handlebars',
			description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
		},
		{
			id:4,
			title: 'UI Interactions of the week',
            date: '12 Feb 2019',
            link1: 'Express',
            link2: 'Handlebars',
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
			
=======
	});

	const [data, setData] = useState([
		{
			id: 1,
			title: 'UI Interactions of the week',
			date: currentDate,
			categories: ['Express','Handlebars'],
		
			description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
		},
		{
			id: 2,
			title: 'UI Interactions of the week',
			date: currentDate,
			categories: ['Express', 'Handlebars'],
			description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
		},
		{
			id: 3,
			title: 'UI Interactions of the week',
			date: '12 Feb 2019',
			categories: ['Express', 'Handlebars', "JS"],
			description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
		},
		{
			id: 4,
			title: 'UI Interactions of the week',
			date: '12 Feb 2019',
			categories: ['Express', 'Handlebars'],
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

>>>>>>> f2a32ed1bc4bbd307279aadf20087da0a6bdc28f
		</div>
	)
}
