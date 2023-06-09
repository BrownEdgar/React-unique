import React, { useState, useEffect } from 'react';

export default function Users() {
  const [data, setData] = useState([]);

	const fetchData = () => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(json => setData(json));
	}

  useEffect(() => {
    fetchData();
  }, [])



  const handleDelete = (id) => {
    const updatedData = data.filter(todo => todo.id !== id);
    setData(updatedData);
  };

  return (
    <div className="todos-container">
      <div className="todos-header">
        <button className="Refresh" onClick={fetchData}>Refresh</button>
      </div>
      {data.map(todo => (
        <div key={todo.id} className="todo-item">
          <p className="todo-id">ID: {todo.id}</p>
          <p className="todo-title">{todo.title}</p>
          <button className="todo-delete" onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
