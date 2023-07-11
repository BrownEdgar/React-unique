import React, { useState, useEffect, useTransition } from 'react';
import axios from 'axios';
import Products from './Products';

import './App.scss';

export default function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [isPending, startTransition] = useTransition();
  const [currentTimeOutId, setcurrentTimeOutId] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?_limit=30').then(res => {
      console.log(res.data); // Log fetched data to check its structure
      setData(res.data);
    });
  }, []);

  const handleChange = (e) => {
    if (currentTimeOutId) {
      clearTimeout(currentTimeOutId);
    }
    const timeoutId = setTimeout(() => {
      startTransition(() => setValue(e.target.value));
    }, 200);
    setcurrentTimeOutId(timeoutId);
  };

  useEffect(() => {
    console.log(data); // Log data to check its type
  }, [data]);

  const filteredData = data.filter(elem => {
    if (value.trim() === '' || value.trim().length < 2) {
      return true;
    }
    return elem.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className='container'>
      <form action=''>
        <input
          type='search'
          name='searchTitle'
          id='searchTitle'
          onChange={handleChange}
        />
      </form>
      <Products data={filteredData} />
    </div>
  );
}
