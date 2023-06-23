import { useReducer, useEffect } from 'react'
import reducer, { initialState } from './reducer'
import MainForm from './MainForm'
import MainTable from './MainTable';

import './App.scss'



export default function App() {
	const [users, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({
			type: "DATA_COPY",
		})
	}, [])


	const addUser = (user) => {
		dispatch({
			type: "ADD_USER",
			payload: { user }
		})
	}
	const sortFirstname = () => {
		dispatch({
			type: "SORT_FIRSTNAME",
		})
	}
	const sortLastname = () => {
		dispatch({
			type: "SORT_LASTNAME"
		})
	}
	const sortEmail = () => {
		dispatch({
			type: "SORT_EMAIL"
		})
	}
	const sortAge = () => {
		dispatch({
			type: "SORT_AGE"
		})
	}
	const filteredFemale = () => {
		dispatch({
			type: "GENDER_FEMALE"
		})
	}
	const filteredMale = () => {
		dispatch({
			type: "GENDER_MALE"
		})
	}
	const cancelGenderFilter = () => {
		dispatch({
			type: "GENDER_CANCEL"
		})
	}

	return (
		<div className='App'>
			<div className="App__forms">
				<h1>Registration</h1>
				<MainForm addUser={addUser} />
			</div>
			<div className="buttons">
				<button onClick={sortFirstname}>by Firstname</button>
				<button onClick={sortLastname}>by Lastname</button>
				<button onClick={sortEmail}>by Email</button>
				<button onClick={sortAge}>by Age</button>
				<button onClick={filteredMale}>Male</button>
				<button onClick={filteredFemale}>Female</button>
				<button onClick={cancelGenderFilter}>all</button>

			</div>



			<div className="App__tables">
				<MainTable users={users.copyed} />
			</div>
		</div>
	)
}
