import { useState } from 'react'

export default function Users({ target, limit }) {
	const [data, setData] = useState([]);
	const getData = (e) => { 
		fetch(`https://jsonplaceholder.typicode.com/${target}?_limit=${limit}`)
		.then(res => res.json())
		.then(json => setData(json))
		e.target.disabled = true;
	}

	return (
		<div>
			<button onClick={getData} disabled={!target}>get data</button>
			<pre>
				{JSON.stringify(data,null,1)}
			</pre>
		</div>
	)
}
