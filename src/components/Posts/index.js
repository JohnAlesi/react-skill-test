
import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import Error from '../Error'
import { usePosts } from '../../hooks/useApi';

const Posts = () => {
  const { getPosts } = usePosts();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);


  useEffect (() => {
    async function fetchPosts () {
      try{
        const response = await getPosts();
        setPosts(response[1])
        setError(false)
      }
      catch(error){
        setError(true)
      }
    }
    fetchPosts();
  })



  return (
    <div className="posts">

      { !error ?  
        posts.map((post, id) => (<Post key={id} {...post} /> )) 
        :
        <Error />
      }
    </div>
  )
}

export default React.memo(Posts);