import React, { useState } from 'react'

const price = {
    barcelona:'680$',
    'New-York':'1470$',
    dubli:'240$',
    yerevan:'150$'
}
export default function App2() {
    const[city,setCity] = useState('')
    const handleChange = (e) => {
        setCity(e.target.value)
    }
  return (
    <div>
        <h1>Select in React</h1>
        <hr />
        <form>
            <select name="cities" id="cities" onChange={handleChange}>
             {
                Object.keys(price).map(elem => {
                    <option value={elem} key={elem}>
                        {elem.replace(elem.at(0).toLocaleUpperCase())}
                    </option>
                })
             }
            </select>
        </form>
        {city ? <h2>Ticket to 
            <span>{city} cost {price(city)}</span>
            </h2> : null}
    </div>
  )
}
