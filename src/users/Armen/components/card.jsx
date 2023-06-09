import { useState } from 'react';
import Photo from '../../../assets/Arm_images/photo.jpg';

export default function Card() {
  const [ data ] = useState({
    id: 1,
    area: 'TRAVEL',
    title: '10 Best Things to Do in Seattle',
    description: 'Seattle is a seaport city on the west coast of the United States...',
    author: 'By Katherine Kato',
    avatar: Photo,
  });

  return (
    <div className='card'>
      <div className="avatar">
        <img src={data.avatar} alt="avatar" />
      </div>
      <div className="card-info">
        <h3>{data.area}</h3>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p className='autor' >{data.author}</p>
      </div>
    </div>
  );
}
