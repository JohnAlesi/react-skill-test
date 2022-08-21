import React from 'react';

const PostContent = ({  title, body, userId }) => {
  return (
    <div className="post-item__content">
      <h1>{ userId }</h1>
      <h1>{ title }</h1>
      <p>{ body }</p>
    </div>
  )
}

export default PostContent;