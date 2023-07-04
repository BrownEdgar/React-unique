import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes/routes'
export default function Navbar() {
  return (
    <header>
        <nav>
          <ul>
            <li>
                <NavLink  to={ROUTES.HOME} className={({isActive}) => isActive ? "active_link" : ""}>Home</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.BLOG} className={({isActive}) => isActive ? "active_link" : ""}>Blog</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.ABOUT} className={({isActive}) => isActive ? "active_link" : ""}>About</NavLink> 
            </li>
            <li>
                <NavLink to={ROUTES.CONTACT} className={({isActive}) => isActive ? "active_link" : ""}>Contact</NavLink> 
            </li>
            <li>
                <NavLink to={ROUTES.PRODUCTS} className={({isActive}) => isActive ? "active_link" : ""}>Products</NavLink> 
            </li>
            <li>
                <NavLink to={ROUTES.TODOS} className={({isActive}) => isActive ? "active_link" : ""}>Todos</NavLink> 
            </li>
          </ul>
        </nav>
    </header>
  )
}
