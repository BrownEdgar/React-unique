import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAlbums } from '../feauchers/albums/albumsSlice'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Albums = () => {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums); 

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  const sliderSettings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '5', 
  };

  return (
    <div className='albums'>
      <h1>Albums</h1>
      <Slider {...sliderSettings}>
        {albums.map((album) => (
          <div key={album.id} className='slide'>
            <h2>{album.id}</h2>
            <h2><strong>User ID: </strong>{album.userId}</h2>
            <h3><strong>Title: </strong>{album.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Albums;
