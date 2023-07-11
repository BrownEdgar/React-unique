import { useState, useRef, useEffect } from 'react'

export default function App() {
	const [value, setValue] = useState('second');
	const inputRef = useRef(null);

	useEffect(() => {
		console.log(inputRef)
		inputRef.current.focus()
	}, [])
	
	return (
		<div>
			<form action="">
				<input type="text" ref={inputRef}/>
			</form>
		</div>
	)
}
