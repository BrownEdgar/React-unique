import { useState } from 'react'

import './App.css'
import Modal from './Modal';

export default function App() {
	const [list, setList] = useState(['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python']);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [deletedIndex, setDeletedIndex] = useState(null);

	const handleDelete = (elemIndex) => {
		setDeletedIndex(elemIndex);
		setIsModalOpen(true)
	}

	const deleteElement = () => {
		setList(list.toSpliced(deletedIndex, 1))
		setIsModalOpen(false)
	}

	return (
		<>
			{/* {isModalOpen && (
				<Modal title={'Are you sure?'} setIsOpen={setIsModalOpen}>
					<button className='cancel' onClick={() => setIsModalOpen(false)}>cancel</button>
					<button onClick={deleteElement}>delete</button>
				</Modal>
			)} */}
			<div className='container'>
				{list.map((elem, index) => {
					return (
						<div key={index}>
							<h2>{elem}</h2>
							<button onClick={() => handleDelete(index)}>delete</button>
						</div>
					)
				})}
			</div>

			{
				isModalOpen && (
					<Modal title={'Are you sure?'} setIsOpen={setIsModalOpen}>
						<button className='cancel' onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button onClick={deleteElement}>DELETE</button>

					</Modal>
				)
			}
		</>

	)
}
