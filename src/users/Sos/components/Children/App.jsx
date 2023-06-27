import React from 'react'
import Component from './Component'

export default function App() {
  return (
    <div>
      <Component>
      <button onClick={() =>darkbtn(type.dark)}>Dark</button><button onClick={() =>lightbtn(type.light)}>Light</button><button></button><button></button>
      </Component>
        <Component title="props children" type ='dark light '>
         <h1>Component.</h1>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nobis nisi rerum laudantium. Fugit, aliquid incidunt, possimus natus provident voluptate distinctio, harum numquam eius exercitationem adipisci veritatis culpa porro mollitia? Mollitia nostrum autem aliquam dolore, odit inventore unde quia enim, eaque porro, doloremque aperiam fugiat.</p>
         <button>OK</button>
        </Component>
    </div>
  )
}
