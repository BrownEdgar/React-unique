

import { Add_Developer, GET_POSTS, SORTED} from './actionTypes';


export const initialState = { 
	actions: 0, 
	developers: [],
	posts: [],
	arr: [ 154,42,1,87,695,36,2,10,39,9 ] 
}


export default function reducer(state = initialState, action) {

	switch (action.type) {
		case GET_POSTS: return { ...state, posts: state.posts.concat(action.payload),actions: state.actions + 1}
		case SORTED: return sorted(state)
		case Add_Developer: return {...state, developers: [...state.developers, action.payload],actions: state.actions + 1}
		

		default: return state;
	}

}
const sorted = (state) => { 
	return { ...state, arr: state.arr.sort((a, b) => a - b) ,actions: state.actions + 1}
 }

