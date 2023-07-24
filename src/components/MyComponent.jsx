import React from 'react'
import { useDispatch } from 'react-redux';
import { addCars } from '../features/cars/carsSlice';

export default function MyComponent() {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const initialFormData = new FormData(e.target)
        const cars = Object.fromEntries(initialFormData.entries())
        dispatch(addCars(cars))
    }

  return (
    <div className='searching'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='auto'required name='auto'/>
        <input type="text" placeholder='model'required name='model' min={2} max={26}/>
        <input type="number" placeholder='year' min={1945} max={2023} required name='year'/>
        <input type="text" placeholder='address' required name='address'/>
        <input type="number" placeholder='phone' required name='phone'/>
        <input type="email" placeholder='email' required name='email' />
        <input type="submit" value={'Add car'} />
      </form>
    </div>
  )
}
