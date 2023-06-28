import React, { useState } from 'react';
import Modal from './Modal';
import './App.css';

export default function App() {
  const [list, setList] = useState(['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python']);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletedIndex, setDeletedIndex] = useState(null);

  const handleDelete = (elemIndex) => {
    setDeletedIndex(elemIndex);
    setIsModalOpen(true);
  };

  const deletedElement = () => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(deletedIndex, 1);
      return updatedList;
    });
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal title={'Are you sure ?'}>
          <button className='cancel' onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button onClick={deletedElement}>DELETE</button>
        </Modal>
      )}

      <div className='container'>
        {list.map((elem, index) => (
          <div key={index}>
            <h2>{elem}</h2>
            <button onClick={() => handleDelete(index)}>DELETE</button>
          </div>
        ))}
      </div>
    </>
  );
}
