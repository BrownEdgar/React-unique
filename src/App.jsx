import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComments, getComments } from './feauchers/comments/commentsSlice';

import './App.css';

export default function App() {
  const allComments = useSelector(getComments);
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => dispatch(addComments(data)));
  }, []);

  const handleQuantityChange = (e) => {
    setSelectedQuantity(Number(e.target.value));
  };

  const displayedComments = allComments.slice(0, selectedQuantity);

  return (
    <div className='container'>
      <select value={selectedQuantity} onChange={handleQuantityChange}>
        {allComments.map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      {displayedComments.map(comment => (
        <div key={comment.id} className='comment'>
          <h1>{comment.id}</h1>
          <h2><strong>Name:</strong> {comment.name}</h2>
          <p><strong>Email:</strong> {comment.email}</p>
          <p><strong>Body:</strong> {comment.body}</p>
        </div>
      ))}
    </div>
  );
}
