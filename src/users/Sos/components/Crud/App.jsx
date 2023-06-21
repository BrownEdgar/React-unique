import { useReducer, useState } from 'react'
import reducer, { initialState } from './reducer'

import './App.scss'

import MainForm from './MainForm'
import MainTable from './MainTable';

export default function App() {
	const [users, dispatch] = useReducer(reducer, initialState);
	const [sortResult,setSortResult] = useState(''); 

	const addUser = (user) => { 
		dispatch({
			type: "ADD_USER",
			payload: { user }
		})
	}
	const handleFirstname = (user) => {
		dispatch({
			type:"SORT_FIRSTNAME",
		})
	}

	const handleLastname = (user) => {
		dispatch({
			type:"SORT_LASTNAME",
		})
	}

	const handleAge = (user) => {
		dispatch({
			type:"SORT_AGE",
		})
	}

	const handleMale = (user) => {
		dispatch({
			type:"SORT_MALE",
		})
	}

	const handleFemale = (user) => {
		dispatch({
			type:"SORT_FEMALE",
		})
	}


	return (
		<div className='App'>
			<div className="App__forms">
				<h1>Registration</h1>
				<MainForm addUser={addUser}/>
			</div>
			<div className="buttons">
				<button onClick={handleFirstname}>by firstname</button>
				<button onClick={handleLastname}>by lastname</button>
				<button onClick={handleAge}>by age</button>
				<button>by email</button>
				<button onClick={handleMale}>by male</button>
				<button onClick={handleFemale}>by female</button>
			</div>




			<div className="App__tables">
				<MainTable users={users}/>
			</div>
		</div>
	)
}

