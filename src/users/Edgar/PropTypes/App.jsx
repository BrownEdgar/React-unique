import React from 'react'
import Child from './Child'

export default function App() {
	return (
		<div>
			<Child isLoading={false} arrProps={[]} obj={{id: 5, name: "Vazgen"}}/>
		</div>
	)
}
