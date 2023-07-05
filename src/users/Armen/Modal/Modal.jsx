import { useRef, useEffect } from 'react';

import './Modal.css'

export default function Modal({ title, children, setIsOpen }) {
	const modalRef = useRef(null)

	useEffect(() => {
		const elementRef = modalRef?.current
		const handleClick = (e) => { 
			if (e.target && e.target.classList.contains("Modal")) {
				setIsOpen(false)
			}
		}
		elementRef.addEventListener('click', handleClick);
		return () => elementRef.removeEventListener('click', handleClick);
	}, [])
	
	return (
		<div className='Modal' ref={modalRef} >
			<div className="Modal-Content">
				<h1>{title}</h1>
				{
					children
				}
			</div>
		</div>
	)
}
