import { useState, useEffect } from 'react'
import json from './data.json'
import './App.scss'


export default function App() {
  
    const [data, setData] = useState(json)

    const [expensid, setExpensid] = useState([])

    const [languageId,steLanguage] = useState([])

    const [is3dId,setIs3d] = useState([])

    const [timeId,setDuration] = useState([])

   useEffect(() => {
    const findExpensivedMovie = () => {
      let price = 0;
      let muvedId;
      data.forEach(elem => {
        if(elem.price > price){
          price = elem.price;
          muvedId = elem.id;
        }
      })
      setExpensid(muvedId)
    }
    findExpensivedMovie()
   },[])

   useEffect(() => {
    const findExpensisLanguage = () => {
      let languageId;
      data.forEach(elem => {
        if(elem.language === 'english'){
          languageId = elem.id;
        }
      })
      steLanguage(languageId)
    }
    findExpensisLanguage()

   },[])

   useEffect(() => {
    const findExpensivIs3d = () => {
      let is3dId;
      data.forEach(elem => {
        if(elem.is3d === true){
          is3dId = elem.id;
        }
      })
      setIs3d(is3dId)
    }
    findExpensivIs3d()
   },[])

   const timefilm = () => {
    let duration = 0;
    let timeId;
    data.map(elem => {
      if(elem.duration > duration){
        duration === elem.duration;
        timeId === elem.id;
      }
    })
    setDuration(timeId)
   }

  return (
    <div className='App'>
        <div className='movie'>
            {
              data.map(elem => {
                return(
                  <div key={elem.id} className={
                    expensid === elem.id ? 'expensid' : ""}>
                    <p><span>Time-</span>{elem.time}</p>
                    <p className={is3dId === elem.id ? 'isformat' : ''}>
                      <span>Price-</span>{elem.price}</p>
                    <p className={timeId === elem.id ? 'time' : ''}>
                      <span>Duration-</span>{elem.duration}</p>
                    <p className={languageId === elem.id ? 'language' : ''}>
                      <span>Language-</span>
                      {elem.language}
                      </p>
                  </div>
                )
              })
            }
             <button className='time__film' onClick={timefilm}>
              Time-film
              </button>
        </div>
    </div>
  )
}
