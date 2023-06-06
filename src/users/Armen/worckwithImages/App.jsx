import React, { useState } from 'react';
import '../worckwithImages/App.css';



export default function App() {
    const [imageUrl, setImageUrl] = useState({
        id: 1,
        name: "Sebastian",
        surName: "Rodriges",
        email: "ex@gmail.com",
        avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSebastian_Stan&psig=AOvVaw0_E8LV6lHR3WsGJuw7y-8W&ust=1686072148990000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPiY5K7SrP8CFQAAAAAdAAAAABAE',
        salary: 500_000,
    })
  return (
    <div classname='card'>
        <div className='avatar' >
            <img src={data.avatar} alt="avatar"/>
        </div>
        <div className="card-info">
            <h2>{data.name} {' '} {data.surName} </h2>
        </div>
      
    </div>
  );
}
