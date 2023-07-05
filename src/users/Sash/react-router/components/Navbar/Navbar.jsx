import { NavLink } from 'react-router-dom'
import "./Navbar.scss"
import ROUTES from '../../routes/routes'
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
            <NavLink to={ROUTES.GALLERY}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.USERS}>Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
