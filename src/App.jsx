import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import { allCars } from './features/cars/carsSlice';
import MyComponent from './components/MyComponent';




export default function App() {
    
  const cars = useSelector(allCars)
    
  return (
   <div className='head'>
    <MyComponent/>
    {
        cars.map(elem => {
           return(
            <div className='block' key={elem.id}>
                   <div className='image'>
                <img src={elem.logo} alt="car-logo" />
                </div>
                <ul>
                    <li className='auto'>
                        {elem.auto}
                    </li>
                    <li className='Id'><span>Id </span>{elem.id}</li>
                    <li className='model'>
                        <span>MODEL </span>
                        {elem.model}
                    </li>
                    <li className='year'>
                        <span>YEAR </span>
                        {elem.year}
                    </li>
                    <li className='addres'>
                    <span>ADDRESS </span>{elem.addres}
                    </li>
                    <li className='phone'>
                        <span>PHONE </span>
                        {elem.phone}
                    </li>
                    <li className='email'>
                        <span>E-MAIL </span>
                        {elem.email}
                    </li>
                </ul>
            </div>
           ) 
        })
    }
   </div>
  )
}
