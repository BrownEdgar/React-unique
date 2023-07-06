import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

export default function Layouts() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
