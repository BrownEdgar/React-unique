import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivatRouter() {

    const [isLogin, setisLogin] = useState(true)
  return (
   <>
   {isLogin ? <Outlet /> : <Navigate/>}
   </>
  )
}
