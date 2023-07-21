import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectAllPosts } from '../feauchers/posts/postsSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log('posts:', posts);

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
    <div className='posts'>
      <h1>Posts</h1>
      <Slider {...sliderSettings}>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.id}</h2>
            <h2><strong>UserID: </strong>{post.userId}</h2>
            <p><strong>Title: </strong>{post.title}</p>
            <p><strong>Body: </strong>{post.body}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Posts;
