import React from 'react';
import Slider from 'react-slick';
import Users from './components/Users';
import Posts from './components/Posts';
import Todos from './components/Todos';
import Albums from './components/Albums';
import './App.css';

export default function App() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div>
      <Slider {...sliderSettings}>
        <div>
          <Users />
        </div>
        <div>
          <Posts />
        </div>
        <div>
          <Todos />
        </div>
        <div>
          <Albums />
        </div>
      </Slider>
    </div>
  );
}
