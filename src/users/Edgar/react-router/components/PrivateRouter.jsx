import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ROUTES from '../routes/routes'

export default function PrivateRouter() {
	const [isLogin] = useState(!!localStorage.getItem("isLogin"))
	return (
		<>
			{isLogin ? <Outlet /> : <Navigate to={ROUTES.HOME} />}
		</>
	)
}
