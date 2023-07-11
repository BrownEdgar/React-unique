import React, { useState, useEffect, useTransition } from 'react';
import axios from 'axios';
import Albums from './Albums';

import './App.scss';

export default function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [isPending, startTransition] = useTransition();
  const [currentTimeOutId, setcurrentTimeOutId] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
      setData(res.data);
    });
  }, []);

  const handleChange = (e) => {
    if (currentTimeOutId) {
        clearTimeout(currentTimeOutId)
    }
    const t = setTimeout(() => {
        startTransition(() => setValue(e.target.value))
    }, 200);
    setcurrentTimeOutId(() => t)
   
  };

  const filteredData = data.filter(elem => {
    if (
      value.trim() === '' ||
      value.trim().length < 2
    ) return true;
    return elem.title.toLowerCase().includes(value.toLowerCase());
  });
  
    
  return (
    <div className='container'>
      <form action=''>
        <input
          type='search'
          name='photoSearch'
          id='photoSearch'
          onChange={handleChange}
        />
      </form>
      <Albums data={filteredData} />
    </div>
  );
}
