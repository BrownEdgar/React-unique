import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAlbums, selectAllAlbums } from '../features/albums/albumsSlice';

const Albums = () => {
  const dispatch = useDispatch();
  const albums = useSelector(selectAllAlbums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  return (
    <div>
      <h2>Albums</h2>
      {albums.map(album => (
        <div key={album.id}>
          <h3>{album.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Albums;
