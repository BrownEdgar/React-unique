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
	const handleSort = (values) => {
		const{firstname}=useState
         if(sortResult){
			firstname.sort((a,b) => {
				a.value - b.value
			})
		 }
		 setSortResult([])
	}

	return (
		<div className='App'>
			<div className="App__forms">
				<h1>Registration</h1>
				<MainForm addUser={addUser}/>
			</div>
			<div className="buttons">
				<button onClick={()=>handleSort('firstname')}>by firstname</button>
			</div>
			<div className="buttons">
				<button onClick={()=>handleSort({lastname})}>by lastname</button>
			</div>
			<div className="buttons">
				<button onClick={()=>handleSort({age})}>by age</button>
			</div>
			<div className="buttons">
				<button>by email</button>
			</div>
			<div className="buttons">
				<button onClick={()=>handleSort({male})}>by male</button>
			</div>
			<div className="buttons">
				<button onClick={()=>handleSort({female})}>by female</button>
			</div>




			<div className="App__tables">
				<MainTable users={users}/>
			</div>
		</div>
	)
}

