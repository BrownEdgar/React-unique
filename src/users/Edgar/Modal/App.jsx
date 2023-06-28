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
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rerum corporis blanditiis illo cumque neque voluptates quas dolorum. Omnis optio ratione minus reiciendis maxime quos. Quae repudiandae suscipit officia inventore minus dicta hic in possimus dolore nihil aperiam aut assumenda nesciunt itaque officiis consequatur sit, at nam explicabo ducimus. Beatae.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet asperiores voluptatum corporis praesentium quae aliquid sint consectetur fugiat dolor accusamus id fuga expedita, optio vel atque magni repellendus natus ullam soluta ducimus veritatis reprehenderit? Obcaecati ea delectus, sunt esse necessitatibus tempora. Quod necessitatibus similique dolorum modi optio laudantium corporis illo molestiae eligendi qui consequatur nam cumque animi magni cum enim ut, voluptatum sequi reiciendis error aperiam impedit asperiores minus laborum. Soluta, itaque inventore ea perspiciatis expedita rerum odio ducimus?
						</p>
					</Modal>
				)
			}
		</>

	)
}
