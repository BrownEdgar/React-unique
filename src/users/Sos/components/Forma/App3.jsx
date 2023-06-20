import React, { useState } from 'react'


export default function App3() {

    const[users,setUsers] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const elementsCheck = Array.form (e.target.elements).filter(
            (elem,index)=>{
                return index !== 0 && index !== 5 && elem ?.checked
        }).map(elem => elem.name)
        const user ={
            
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type ='checkbox' name='html' id='htmlCss'/>
            <label htmlFor='htmlCss'>Html-css</label>
            <input type ='checkbox' name='html.css' id='htmlJs'/>
            <label htmlFor='htmlJs'>Html-js</label>
            <input type ='checkbox' name='html.js' id='cssReact'/>
            <label htmlFor='cssReact'>css-React</label>
            <input type ='checkbox' name='html.react.js'id='reactJs'/>
            <label htmlFor='reactJs'>React.js</label>
            <input type="submit" value='Register' />
        </form>
    </div>
  )
}
