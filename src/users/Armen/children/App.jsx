import React from 'react'
import Component from './Component'

export default function App() {
  return (
    <div>
        <Component title="props children">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quibusdam.</p>
        </Component>
        <Component>
            <h2>Somthing went wrong</h2>
            <button>ok</button>
            <button>cancel</button>
        </Component>
    </div>
  )
}
