import { useReducer, useEffect } from 'react'
import reducer, { initialState } from './reducer'
import {  ADD_DEVELOPER, GET_POSTS, SORTED } from './actionTypes';
import axios from 'axios';

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	

useEffect(() => {
	axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
		.then(res => dispatch({ type: GET_POSTS, payload: res.data }))
}, [])

	const arrSort =() => {
		dispatch({type: SORTED})
	}
	const handleSubmit = (e) => {  
		e.preventDefault();
		dispatch({
			type: ADD_DEVELOPER,
			payload: e.target[0].value
		})
	}
	return (
		<div>
			<pre>State: {JSON.stringify(state)}</pre>
			<button onClick={arrSort}>Sort arr</button>
			
			<form onSubmit={handleSubmit}>
				<input type="text" />
				<input type="submit" />
			</form>
		</div>
	)
}
  // Ստեղծել կոճակներ որոնք կանեն հետևյալ գործողությունները
  // - Jsonplaceholder -ից կստանա 10 հատ post և կպահի `posts` զանգվածի մեջ ,զուգահեռ նաև կնկարի Էջում
  // - Էջում պետք է ունենալ 1 input և այտեղ գրված անունը պետք է ավելացնել `developers` զանգվածի մեջ
  // - սորտաովրել arr զանգվածը։
  // - առաջին գործողությունով ստացած 10 հատ post-ի id-ը ջնջել և փոխարենը դնել arr զանգվածի 10 թվերը։
  // - ամեն մի post-ում լինի 'x' կոճակ և այն ՛click՛ի ժամանակ պիտի ջնջի հերթական post-ը,


// - Ամեն մի գործողությունից հետո(click) `actions` թվային հատկությունը ավելացնել 1 - ով։