import React, {useState, useEffect} from 'react'
import Post from './Post'
import './Feed.css'
import PostItem from './PostItem'
import {UserContext} from '../../store/Provider'
import db from '../../store/firebase'
function Feed() {
  const [posts, setPosts] = useState ([])
   useEffect(() => {
     db.collection("posts").orderBy('timestamp', 'desc').onSnapshot ((snapshot)=>(
        setPosts (snapshot.docs.map((doc) => ({id:doc.id , data:doc.data() })))
     ))
   }, [])
   console.log (posts)
  return (
    <div className="feed">
      <Post/>
      {
        posts.map((post)=> 
        (
          <PostItem
          key={post.id}
          PP={post.data.PP}
          image={post.data.image}
          userName={post.data.userName}
          timestamp={post.data.timestamp}
          content={post.data.message}
          
          />
        ))
      }
      
    </div>
  )
}

export default Feed
