import { ADD_COUNT, MINUS_COUNT, PUSH_NUMBER, RESET_COUNT } from './actionTypes';

export const initialState = { count: 0, data: [ 154,42,1,87,695,36,2,10,39,9 ] }


export default function reducer(state = initialState, action) {

	switch (action.type) {
		case ADD_COUNT:
			return { ...state, count: state.count + 1 };
		case MINUS_COUNT:
			return { ...state, count: state.count - 1 };
		case PUSH_NUMBER:
			return sorted(state)
		case RESET_COUNT:
			return initialState;

		default: return state;


	}

}

const sorted = (state) => { 
	return { ...state, data: state.data.sort((a, b) => a - b) }
 }

