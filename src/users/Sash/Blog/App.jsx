import { createContext, useState } from 'react'
import Blog from './Blog'
import "./App.css"

export const MyContext = createContext([])

export default function App() {
  const [data] = useState([
    {
      id: 1,
      title: "UI Interactions of the week",
      data: "12 Feb 2019",
      text: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      id: 2,
      title: "UI Interactions of the week",
      data: "12 Feb 2019",
      text: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      id: 3,
      title: "UI Interactions of the week",
      data: "12 Feb 2019",
      text: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      id: 4,
      title: "UI Interactions of the week",
      data: "12 Feb 2019",
      text: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ])
  return (
    <div className='App'>
      <MyContext.Provider value={data}>
       <Blog />
      </MyContext.Provider>
    </div>
  )
}
