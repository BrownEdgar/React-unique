import React, { useRef, useEffect } from 'react';
import './Modal.css';

export default function Modal({ title, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const elementRef = modalRef?.current
    const handleClick = (e) => {
      if (e.target && e.target.classList.contains("Modal")) {
        setIsOpen(false)
       
      }
    };

    elementRef.addEventListener('click', handleClick);

    return () => elementRef.remoeEventListener('click', handleClick);
  }, []);

  return (
    <div className='modal'>
      <div className='Modal-Content' ref={modalRef}>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
