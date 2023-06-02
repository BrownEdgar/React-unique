import { useState } from "react"
import Test from "./components/Test"

import './App.css'
import Users from "./components/Users"

function App() {

	const [menuList, setMenuList] = useState([
		"Home",
		'About',
		'Blog',
		'Gallary',
		'Contact',
	])
	const [color, setColor] = useState('#222')
	const [isShow, setIsShow] = useState(true)


	const handleChange = () => {
		setMenuList(menuList.with(3, "Delivery"));
		setColor('royalblue')
	}

	const deleteLastElement = () => {
		// if (menuList.length > 1) {
		// 	setMenuList(menuList.slice(0, -1))
		// }else{
		// 	setMenuList([])
		// }

		const copy = [...menuList];
		copy.pop()
		setMenuList(copy)
	}
	return (
		<div style={{
			backgroundColor: color,
			padding: '16px'
		}}>
			<Users  limit={2}/>
			<button>ok</button>
		</div>
	)
}

export default App