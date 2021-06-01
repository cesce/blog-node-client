// useEffect hook is used to ensure only when component is created is called the get posts
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CommentCreate from './CommentCreate';

const PostList = () => {
  // We create new piece of the state. We use useState to set the initial value
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');

    // Axios will returns the data inside the .data property
    setPosts(res.data);
  };

  // We tell React to run this function one time, using [] for it
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div className="card" style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>;
};

export default PostList;
