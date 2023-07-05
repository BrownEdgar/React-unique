import React from 'react'
import {NavLink } from 'react-router-dom'
import ROUTES from '../routes/routes'
import './Navbar.scss'

export default function Navbar() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to={ROUTES.HOME}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.BLOG}>Blog</NavLink> 
                </li>
                <li>
                    <NavLink to={ROUTES.ABOUT}>About</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.POSTS}>Posts</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.CARTS}>Carts</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
