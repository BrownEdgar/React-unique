import React, { useContext } from 'react'
import { MyContext } from './App'
import Text from './Text'


export default function TextItem() {

 const texts = useContext(MyContext)
  return (
    <div>
       {
        texts.map(text => <Text key={text.id} text={text}/>)
     }
    </div>
  )
}
