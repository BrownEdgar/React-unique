
import axios from 'axios';
import { GET_POSTS, SORTED} from './actionTypes';


export const initialState = { 
	actions: 0, 
	developers: [],
	posts: [],
	arr: [ 154,42,1,87,695,36,2,10,39,9 ] 
}


export default function reducer(state = initialState, action) {

	switch (action.type) {
		case GET_POSTS: return fetch(state)
		case SORTED: return sorted(state)
		
		

		default: return state;
	}

}
const a = (axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10"))
const fetch = (state) => {
	
	return{ ...state, posts: state.posts.concat(a.data)
	.then(res => console.log(res.data)), actions: state.actions + 1}
}

const sorted = (state) => { 
	return { ...state, arr: state.arr.sort((a, b) => a - b) ,actions: state.actions + 1}
 }

