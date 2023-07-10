import React from 'react';

export default function Albums({ data }) {
  return (
    <div className='Photos'>
      {data.map(photo => {
        return (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <hr />
            <h2>{photo.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
