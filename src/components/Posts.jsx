import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectAllPosts } from '../feauchers/posts/postsSlice';
const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log('posts:', posts);

  return (
    <div className='posts'>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.id}</h2>
          <h2><strong>UserID: </strong>{post.userId}</h2>
          <p><strong>Title: </strong>{post.title}</p>
          <p><strong>Body: </strong>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
export default Posts;