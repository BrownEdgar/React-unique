import React, { useRef } from 'react'
import './Modal.css'

export default function Modal({title,children}) {

    const modalRef = useRef(null)

    useEffect(() => {
    const handleClick = (e) => { }
    
    window.addEventListener('click')
    return () => window.removeEventListener('click',handleClick)
    },[])
    

  return (
    <div className='modal' >
     <div className="modal-content" ref={modalRef}>
     <h1>{title}</h1>
        {
        children
        }
     </div>
    </div>
  )
}
