import React, { useState } from 'react';
import '../worckwithImages/App.css';



export default function App() {
    const [imageUrl, setImageUrl] = useState('https://images4.alphacoders.com/155/155636.jpg')
  return (
    <div>
      <h1>Image in React</h1>
      <img src="https://images4.alphacoders.com/155/155636.jpg" alt="watch" />
    </div>
  );
}


