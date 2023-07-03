import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Modal from './Modal';

export default function App() {


    const[list,setList] = useState(['HTML','REACT.JS','JAVASCRIPT','CSS']);
    const [isModal, setisModal] = useState(true)
    const [deletingIndex, setdeletingIndex] = useState(null)
const handleDelete = (elemindex) => {
    setdeletingIndex(elemindex)
    setisModal(true)
}
  const deleteElement = () => {
    setList(list.toSpliced(deletingIndex,1))
    setisModal(false)
  }
  return (
    <>
{ isModal &&( <Modal title={'Are yoy sure?'} setIsOpen={setisModal}>
        <button className='cancle' onClick={() => setisModal(false)}>cancle</button>
        <button onClick={deleteElement}>delete</button>
       </Modal>)}
    <div className='contanier'>
       {list.map((elem,index) => {
        return(
            <div key={index}>
                <h2>{elem}</h2>
                <button onClick={() => handleDelete(index)}>delete</button>
            </div>
        )
       })}
     
    </div>
    </>
  )
}
