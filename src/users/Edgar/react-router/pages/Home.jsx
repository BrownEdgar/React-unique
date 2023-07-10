export default function Home({title}) {
	const login = () => { 
		localStorage.setItem("isLogin", true)
	}
	const logout = () => {  
		localStorage.removeItem("isLogin")
	}
	return (
		<div>
			<h1>{title}</h1>

			<button onClick={login}>Login</button>
			<button onClick={logout}>LogOUT</button>
		</div>
	)
}
