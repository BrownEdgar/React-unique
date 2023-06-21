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
    const sortFirstname = () =>{
        dispatch({
            type: "SORT_FIRSTNAME",
        })
    }
    const sortLastname = () =>{
        dispatch({
            type: "SORT_LASTNAME"
        })
    }
    const sortEmail = () =>{
        dispatch({
            type: "SORT_EMAIL"
        })
    }
    const sortAge = () => {
        dispatch({
            type: "SORT_AGE"
        })
    }
    const filteredFemale = () =>{
        dispatch({
            type: "GENDER_FEMALE"
        })
    }
    const filteredMale = () =>{
        dispatch({
            type: "GENDER_MALE"
        })
    }
    const refresh = () =>{
        dispatch({
            type: "REFRESH"
        })
    }
	return (
		<div className='App'>
			<div className="App__forms">
				<h1>Registration</h1>
				<MainForm addUser={addUser}/>
			</div>
			<div className="buttons">
				<button onClick={sortFirstname}>by Firstname</button>
				<button onClick={sortLastname}>by Lastname</button>
				<button onClick={sortEmail}>by Email</button>
				<button onClick={sortAge}>by Age</button>
				<button onClick={filteredFemale}>Male</button>
				<button onClick={filteredMale}>Female</button>
				<button onClick={refresh}>Refresh</button>
			</div>



			<div className="App__tables">
				<MainTable users={users}/>
			</div>
		</div>
	)
}
