import React from 'react'
import Post from './Post'
import './Feed.css'
import PostItem from './PostItem'
function Feed() {
  return (
    <div className="feed">
      <Post/>
      <PostItem PP="https://styles.redditmedia.com/t5_bkynz/styles/profileIcon_snoo41bc2925-461a-48e1-9960-6b4863af34cc-headshot.png?width=256&height=256&crop=256:256,smart&s=eb99389295bf3d5bff50edc3f6f93f8723debf29"
                image="https://d25tv1xepz39hi.cloudfront.net/2016-08-01/files/picture-style_1311.jpg"
                userName="Toka Abdulhamied" timestamp="timestamp.." content="this is so beutiful"/>
      <PostItem PP="https://styles.redditmedia.com/t5_bkynz/styles/profileIcon_snoo41bc2925-461a-48e1-9960-6b4863af34cc-headshot.png?width=256&height=256&crop=256:256,smart&s=eb99389295bf3d5bff50edc3f6f93f8723debf29"
                userName="Toka Abdulhamied" timestamp="timestamp.." content="this is so beutiful"/>
    </div>
  )
}

export default Feed
