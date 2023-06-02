import React from 'react'

export default function Menu({ list, handleChange, deleteLastElement }) {
	return (
		<>
			<ul>
				{
					list.map((elem, index) => <li key={index} 
						className={index % 2 === 0 ? 'green' : ''}	
					>{elem}</li>)
				}
			</ul>
			<button onClick={handleChange}>change name</button>
			<button onClick={deleteLastElement}>DELETE</button>
		</>

	)
}
