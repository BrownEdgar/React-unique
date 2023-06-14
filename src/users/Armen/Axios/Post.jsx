
import PropTypes from 'prop-types';

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <p className="post-user">User ID: {post.userId}</p>
      <p className="post-id">Post ID: {post.id}</p>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
