import React from 'react';
import { useSelector } from 'react-redux';
import {allSelector} from './feauchers/test/testSlise'

const App2 = () => {
  const films = useSelector(allSelector);

  return (
    <div>
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
  );
};

export default App2;
