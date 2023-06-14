import { useReducer } from 'react'
import reducer, { initialState } from './reducer'
import {  GET_POSTS, SORTED } from './actionTypes';
export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	

	const getPosts = () => {
		dispatch({ type: GET_POSTS })
	}
	const arrSort =() => {
		dispatch({type: SORTED})
	}
	
	return (
		<div>
			<h1>State: {JSON.stringify(state)}</h1>
			<button onClick={getPosts}>Get Posts</button>
			<button onClick={arrSort}>Sort arr</button>
			<input type="text"/>
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