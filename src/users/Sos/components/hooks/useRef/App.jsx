import  { useState } from 'react'
import data from './data.json'
import './App.scss'

export default function App() {
    const [data, setData] = useState('second')

    const priceList = () => {
      if(elem.price === 2800){
        style.color="red"
      }
    }

  return (
    <div className='App'>
        <div className='muvie'>
            {
              data.localeCompare(elem => {
                return(
                  <div key={elem.id}>
                    <h2>{elem.time}</h2>
                    <p>{elem.price}</p>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}
