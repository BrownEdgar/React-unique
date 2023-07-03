import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Section from '../Section/Section'

export default function Layouts() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Section/>
    </div>
  )
}
