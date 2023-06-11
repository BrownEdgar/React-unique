import React, { useState } from 'react';
import axios from 'axios';

import '../Reduser/App.css';

const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
};

export default function App() {
  const [state, setState] = useState(initialState);
  const { actions, developers, posts, arr } = state;

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const fetchedPosts = response.data;
      setState(prevState => ({
        ...prevState,
        posts: fetchedPosts
      }));
      increaseActions();
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const addDeveloper = (event) => {
    event.preventDefault();
    const developerName = event.target.elements.developerName.value;
    setState(prevState => ({
      ...prevState,
      developers: [...prevState.developers, developerName]
    }));
    increaseActions();
    event.target.reset();
  };

  const sortArray = () => {
    const sortedArr = [...arr].sort((a, b) => a - b);
    setState(prevState => ({
      ...prevState,
      arr: sortedArr
    }));
    increaseActions();
  };

  const replacePostIds = () => {
    const replacedPosts = posts.map((post, index) => ({
      ...post,
      id: arr[index]
    }));
    setState(prevState => ({
      ...prevState,
      posts: replacedPosts
    }));
    increaseActions();
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setState(prevState => ({
      ...prevState,
      posts: updatedPosts
    }));
    increaseActions();
  };

  const increaseActions = () => {
    setState(prevState => ({
      ...prevState,
      actions: prevState.actions + 1
    }));
  };

  return (
    <div className="general">
      <h1>Actions: {actions}</h1>

      <button onClick={fetchPosts}>Fetch Posts</button>

      <form onSubmit={addDeveloper}>
        <input type="text" name="developerName" placeholder="Enter developer name" />
        <button type="submit">Add Developer</button>
      </form>

      <button onClick={sortArray}>Sort Array</button>

      <button onClick={replacePostIds}>Replace Post IDs</button>
        <div className="developer">
        <h2>Developers:</h2>
      <ul>
        {developers.map((developer, index) => (
          <li key={index}>{developer}</li>
        ))}
      </ul>

        </div>
    <div>
    <h2>Posts:</h2>
      {posts.map(post => (
  <div key={post.id} className ="posts">
     <span>User ID: {post.userId}</span>
     <span>Post ID: {post.id}</span>
     <a href="#"  className ="delete" onClick={() => deletePost(post.id)}>&times;</a>
     <h3>{post.title}</h3>
     <p>{post.body}</p>
  </div>
))}
  
    </div>
  


    </div>
  );
}
