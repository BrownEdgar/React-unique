
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
				setPosts(response.data);
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		}

    fetchPosts();
  }, []);


  return (
    <div>
      <h1>Posts</h1>
      <div className="post-list">
				{posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostList;
