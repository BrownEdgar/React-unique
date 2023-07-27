import React from 'react';
import { useSelector } from 'react-redux';
import {allSelector} from './feauchers/test/testSlise'
import MyForm from './components/MyForm'
import './App2.css';

const App2 = () => {
  const films = useSelector(allSelector);

  return (
    <>
    <MyForm />
<div className='films'>
      {
        films.map(film => {
          return (
            <div className ='film' key={film.id}>
                <h2>{film.title}</h2>
                <ul>
                  <li>
                    <span>id:</span> {film.id}
                  </li>
                  <li>
                    <span>year:</span> {film.year} 
                  </li>
                  <li>
                    <span>rating:</span> {film.rating} 
                  </li>
                </ul>
            </div>
          )
        })
      }
    </div>
    </>
    
  );
};

export default App2;
