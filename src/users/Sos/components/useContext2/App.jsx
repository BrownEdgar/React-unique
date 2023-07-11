import React, { createContext,useState} from 'react'
import TextItem from './TextItem'
import './App.scss'

export const MyContext = createContext([])
export default function App() {
    const [data, setData] = useState([
        {
         header:'Blog'
        },
        {
            id:1,
            head:"UI Interactions of the week",
            time:'12 Feb 2019 | Express, Handlebars',
            text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            line:[<hr/>]
        },
        {
            id:2,
            head:"UI Interactions of the week",
            time:'12 Feb 2019 | Express, Handlebars',
            text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            line:[<hr/>]
        },
        {
            id:3,
            head:"UI Interactions of the week",
            time:'12 Feb 2019 | Express, Handlebars',
            text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            line:[<hr/>]
        },
        {
            id:4,
            head:"UI Interactions of the week",
            time:'12 Feb 2019 | Express, Handlebars',
            text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            line:[<hr/>]
        },
        {
            facebook:[<i class="fa-brands fa-square-facebook"></i>],
            instagram:[<i class="fa-brands fa-instagram"></i>],
            twitter:[<i class="fa-brands fa-twitter"></i>],
            linkedin:[<i class="fa-brands fa-linkedin"></i>]
        }
    ])
  return (
    <div>
      <MyContext.Provider value={data}>
          <TextItem/>
        </MyContext.Provider>
        
    </div>
  )
}
