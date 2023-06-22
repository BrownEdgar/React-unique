import  { useReducer, useState } from 'react';
import reducer, { initialState } from './reduse';

import './App.scss';

import MainForm from './MainForm';
import MainTable from './MainTable';

export default function App() {
  const [users, dispatch] = useReducer(reducer, initialState);
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [sortedColumn, setSortedColumn] = useState('firstname'); 
  const [filterGender, setFilterGender] = useState(''); 

  const handleSort = (column) => {
  
    if (column === sortedColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedColumn(column);
      setSortOrder('asc');
    }
  };

  const handleFilter = () => {
    if (filterGender === '') {
      setFilterGender('male'); 
    } else if (filterGender === 'male') {
      setFilterGender('female'); 
    } else {
      setFilterGender(''); 
    }
  };

  const sortedUsers = [...users];
  sortedUsers.sort((a, b) => {
    const valueA = a[sortedColumn].toLowerCase();
    const valueB = b[sortedColumn].toLowerCase();

    if (sortOrder === 'asc') {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });

  const filteredUsers = sortedUsers.filter((user) => {
    if (filterGender === '') {
      return true; 
    } else {
      return user.gender === filterGender;
    }
  });

  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: { user },
    });
  };

  return (
    <div className="App">
      <div className="App__forms">
        <h1>Registration</h1>
        <MainForm addUser={addUser} />
      </div>
      <div className="buttons">
        <button onClick={() => handleSort('firstname')}>First Name {sortedColumn === 'firstname' && sortOrder === 'asc' ? '▲' : '▼'}</button>
        <button onClick={() => handleSort('lastname')}>Last Name {sortedColumn === 'lastname' && sortOrder === 'asc' ? '▲' : '▼'}</button>
        <button onClick={handleFilter}>
          {filterGender === '' ? 'Show All' : `Show ${filterGender.charAt(0).toUpperCase()}${filterGender.slice(1)}`}
        </button>
      </div>
      <div className="App__tables">
        <MainTable users={filteredUsers} />
      </div>
    </div>
  );
}