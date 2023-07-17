import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {

	const counter = useSelector(state => state.counter)
	return (
		<div>
			<h1>counter: {counter}</h1>
		</div>
	)
}
