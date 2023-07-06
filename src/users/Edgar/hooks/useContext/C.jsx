import { useContext } from "react"
import { MyContext } from "./App"


export default function C() {

	const value = useContext(MyContext);
	console.log(value)
	return (
		<div>
			<h2>Component C {JSON.stringify(value)}</h2>
		</div>
	)
}
