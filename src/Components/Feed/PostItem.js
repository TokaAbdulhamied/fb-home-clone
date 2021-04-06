import { Avatar } from '@material-ui/core'
import React from 'react'
import './Feed.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
function PostItem({PP, userName, timestamp, image, content}) {
  return (
    <div className="postItem">
      <div className="postItem__body">
        <Avatar src={PP}/>
        <div className="postItem__info">
          <h4>{userName}</h4>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="postItem__content">
        {content}
      </div>
      <div className="postItem__image">
        {image && <img src={image} width="100%" height="100%" />}
      </div>
      <div className="postItem__options">
        <div className="postItem__option">
          <ThumbUpIcon/>
          <p>Like</p>
        </div>
        <div className="postItem__option">
          <ChatBubbleOutlineIcon/>
          <p>Comment</p>
        </div>
          <div className="postItem__option">
          <NearMeIcon/>
          <p>Share</p>
        </div>
      </div>
    </div>
  )
}

export default PostItem
