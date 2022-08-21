import React from 'react';
import PostContent from './PostContent';

const Post = ({ id, title, body, userId }) => {
  return (
    <div id={id} className="post-item">
      <PostContent userId={userId} title={title} body={body} />
    </div>
  )
}

export default Post;