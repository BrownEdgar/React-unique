import {Outlet} from 'react-router-dom'
import Navbar from './Navbar/Navbar'

export default function Layouts() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <footer>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem.</p>
        </footer>
    </div>
  )
}
