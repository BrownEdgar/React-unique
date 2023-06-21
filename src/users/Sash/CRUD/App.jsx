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
    const sortage = () =>{
        dispatch({
            type: "SORT_USERAGE",
        })
    }
    const sortfirst = () =>{
        dispatch({
            type: "SORT_FIRSTNAME"
        })
    }
    const sortemail = () =>{
        dispatch({
            type: "SORT_EMAIL"
        })
    }
    const genderfiltermale = () =>{
        dispatch({
            type: "GENDERMALE"
        })
    }
    const genderfilterfemale = () =>{
        dispatch({
            type: "GENDERFEMALE"
        })
    }
	return (
		<div className='App'>
			<div className="App__forms">
				<h1>Registration</h1>
				<MainForm addUser={addUser}/>
			</div>
			<div className="buttons">
				<button onClick={sortage}>by age</button>
				<button onClick={sortfirst}>by Firstname</button>
				<button onClick={sortemail}>by Email</button>
				<button onClick={genderfiltermale}>Male</button>
				<button onClick={genderfilterfemale}>Female</button>
			</div>



			<div className="App__tables">
				<MainTable users={users}/>
			</div>
		</div>
	)
}
