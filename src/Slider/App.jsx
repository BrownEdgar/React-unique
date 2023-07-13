import React from 'react'
import './App.css'
import Slider from 'react-slick';

export default function App() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="nature" />
            <h3>Lonely tree in nature</h3>
          </div>
          <div>
            <img src="https://st4.depositphotos.com/12052680/38421/i/600/depositphotos_384213514-stock-photo-background-dramatic-clouds-sunset-storm.jpg" alt="sun" />
            <h3>The sunset is the most beautiful in the world
            </h3>
          </div>
          <div>
            <img src="https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg" alt="girl in pink" />
            <h3>Girl in pink</h3>
          </div>
          <div>
            <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/12/photos-of-indonesia-rarindra-prakarsa-4.jpg" alt="wather" />
            <h3>Children pour water on each other</h3>
          </div>
          <div>
            <img src="https://media1.popsugar-assets.com/files/thumbor/ce6PnI01VaE5d278IwpMiRha4cM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/01/07/708/n/1922441/83b5a28e5e14ab2c61b942.46517980_GettyImages-/i/Best-Winter-Photos.jpg" alt="coffee snow" />
            <h3>Good morning world</h3>
          </div>
          <div>
            <img src="https://us.123rf.com/450wm/epokrovsky/epokrovsky2006/epokrovsky200600114/148233114-belle-jeune-fille-assise-pr%C3%A8s-de-la-tour-eiffel-%C3%A0-paris-touriste-profitant-de-ses-vacances-en.jpg?ver=6" alt="love paris" />
            <h3>I love Paris</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}
