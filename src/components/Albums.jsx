import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAlbums } from '../feauchers/albums/albumsSlice'; 

const Albums = () => {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums); 

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  return (
    <div className='albums'>
      <h1>Albums</h1>
      {albums.map(album => (
        <div key={album.id}>
          <h2>{album.id}</h2>
          <h2><strong>User ID: </strong>{album.userId}</h2>
          <h3><strong>Title: </strong>{album.title}</h3>
         
        </div>
      ))}
    </div>
  );
};

export default Albums;
