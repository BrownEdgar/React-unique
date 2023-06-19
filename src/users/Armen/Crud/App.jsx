import { useReducer } from 'react'
import reducer, { initialState } from './reducer'

import './App.scss'

import MainForm from './MainForm'
import MainTable from './MainTable';

export default function App() {
	const [users, dispatch] = useReducer(reducer, initialState);

	const addUser = (user) => { 
		dispatch({
			type: "ADD_USER",
			payload: { user }
		})
	}

	return (
		<div className='App'>
			<div className="App__forms">
				<h1>Registration</h1>
				<MainForm addUser={addUser}/>
			</div>
			<div className="buttons">
				<button>by firstname</button>
			</div>



			<div className="App__tables">
				<MainTable users={users}/>
			</div>
		</div>
	)
}

